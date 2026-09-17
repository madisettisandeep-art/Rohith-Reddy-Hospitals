'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Lock, User, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Simple role-based staff authentication
    // Default hospital credentials: admin / hospital@2026
    if (
      (username === 'admin' && password === 'hospital@2026') ||
      (username === 'staff' && password === 'staff@2026')
    ) {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('rrh_admin_user', JSON.stringify({
          username,
          role: username === 'admin' ? 'ADMIN' : 'STAFF',
          name: username === 'admin' ? 'Hospital Administrator' : 'Front Desk Staff',
          loginTime: new Date().toISOString(),
        }));
      }
      router.push('/admin');
    } else {
      setError('Invalid username or password. Please check your credentials.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 bg-[#FFFCF8]">
      <div className="hospital-card p-8 sm:p-10 w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="relative w-24 h-24 mx-auto">
            <Image
              src="/images/logo.png"
              alt="Rohith Reddy Hospitals Logo"
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>
          <h1 className="font-display font-bold text-2xl text-brand-darkText">
            Hospital Staff Portal
          </h1>
          <p className="text-xs text-brand-secondaryText">
            Rohith Reddy Hospitals Administrative &amp; OPD Management
          </p>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-brand-darkText mb-1">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-brand-secondaryText absolute left-3 top-3" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="e.g. admin"
                className="w-full pl-9 pr-3 py-2 bg-white border border-brand-border rounded-xl text-xs sm:text-sm focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-brand-darkText mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-brand-secondaryText absolute left-3 top-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••••••"
                className="w-full pl-9 pr-3 py-2 bg-white border border-brand-border rounded-xl text-xs sm:text-sm focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3 text-xs uppercase tracking-wider font-bold shadow-cta"
          >
            {loading ? 'Authenticating...' : 'Sign In to Portal'}
          </button>
        </form>

        <div className="p-4 rounded-xl bg-[#FFF9F0] border border-brand-border text-[11px] text-brand-secondaryText space-y-1">
          <p className="font-bold text-brand-darkText">Authorized Access Only</p>
          <p>
            Demo staff credentials: Username <code className="font-mono bg-white px-1 py-0.5 rounded text-brand-darkText">admin</code>, Password <code className="font-mono bg-white px-1 py-0.5 rounded text-brand-darkText">hospital@2026</code>
          </p>
        </div>
      </div>
    </div>
  );
}
