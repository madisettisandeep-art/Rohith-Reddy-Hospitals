import { GoogleReview } from '../types';
import { verifiedGoogleReviews, hospitalSettings } from '../data/hospital-data';

interface CachedReviewResponse {
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
  lastFetched: number;
  source: 'cache' | 'api' | 'fallback';
}

const REVIEW_CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

// In-memory persistent cache
let memoryReviewCache: CachedReviewResponse = {
  rating: hospitalSettings.googleRating,
  reviewCount: hospitalSettings.googleReviewCount,
  reviews: verifiedGoogleReviews,
  lastFetched: Date.now(),
  source: 'fallback',
};

export async function getCachedGoogleReviews(): Promise<CachedReviewResponse> {
  const now = Date.now();
  const isCacheValid = now - memoryReviewCache.lastFetched < REVIEW_CACHE_TTL_MS;

  if (isCacheValid && memoryReviewCache.reviews.length > 0) {
    return {
      ...memoryReviewCache,
      source: 'cache',
    };
  }

  // Attempt live upstream refresh if API key is provided
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (apiKey && placeId) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`,
        {
          signal: controller.signal,
          next: { revalidate: 21600 }, // 6 hours
        }
      );
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data.result) {
          const liveReviews: GoogleReview[] = (data.result.reviews || []).map(
            (r: any, idx: number) => ({
              id: `g-${idx}-${r.time || Date.now()}`,
              authorName: r.author_name || 'Verified Patient',
              rating: r.rating || 5,
              relativeTimeDescription: r.relative_time_description || 'Recent review',
              text: r.text || '',
              authorPhotoUrl: r.profile_photo_url,
              verifiedTheme: 'general' as const,
            })
          );

          memoryReviewCache = {
            rating: data.result.rating || hospitalSettings.googleRating,
            reviewCount: data.result.user_ratings_total || hospitalSettings.googleReviewCount,
            reviews: liveReviews.length > 0 ? liveReviews : verifiedGoogleReviews,
            lastFetched: now,
            source: 'api',
          };

          return memoryReviewCache;
        }
      }
    } catch (err) {
      console.warn('[GoogleReviewsCache] Upstream fetch failed, falling back to cached reviews:', err);
    }
  }

  // Fallback to verified local cached records (guarantees zero downtime)
  memoryReviewCache = {
    rating: hospitalSettings.googleRating,
    reviewCount: hospitalSettings.googleReviewCount,
    reviews: verifiedGoogleReviews,
    lastFetched: now,
    source: 'fallback',
  };

  return memoryReviewCache;
}
