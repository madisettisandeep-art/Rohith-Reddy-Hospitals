'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Settings,
  Users,
  Star,
  Clock,
  Phone,
  CheckCircle,
  XCircle,
  AlertCircle,
  Save,
  LogOut,
  ShieldCheck,
  Search,
  Filter,
} from 'lucide-react';
import { Appointment, HospitalSettings } from '@/lib/types';
import { hospitalSettings as defaultSettings, verifiedServices } from '@/lib/data/hospital-data';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'appointments' | 'settings' | 'services'>('appointments');
  const [user, setUser] = useState<{ username: string; role: string; name: string } | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [settings, setSettings] = useState<HospitalSettings>(defaultSettings);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check local session
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('rrh_admin_user');
      if (!stored) {
        router.push('/admin/login');
        return;
      }
      setUser(JSON.parse(stored));
    }

    // Load live appointments & settings
    loadAppointments();
    loadSettings();
  }, [router]);

  const loadAppointments = async () => {
    try {
      const res = await fetch('/api/appointments');
      if (res.ok) {
        const data = await res.json();
        setAppointments(data.appointments || []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const loadSettings = async () => {
    try {
      const res = await fetch('/api/admin/content');
      if (res.ok) {
        const data = await res.json();
        if (data.settings) setSettings(data.settings);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateStatus = (id: string, newStatus: Appointment['status']) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status: newStatus } : apt))
    );
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage(null);

    try {
      const res = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        setSaveMessage('Hospital settings updated successfully!');
        setTimeout(() => setSaveMessage(null), 3000);
      }
    } catch (err) {
      setSaveMessage('Failed to save settings.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('rrh_admin_user');
    }
    router.push('/admin/login');
  };

  const filteredAppointments = appointments.filter((apt) => {
    const matchesStatus = filterStatus === 'all' || apt.status === filterStatus;
    const matchesSearch =
      apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.mobileNumber.includes(searchTerm) ||
      apt.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="py-8 bg-[#FFFCF8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Top Header */}
        <div className="hospital-card p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-xl bg-white p-1 border border-brand-border shrink-0">
              <Image
                src="/images/logo.png"
                alt="Rohith Reddy Hospitals Logo"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-brand-darkText">
                Rohith Reddy Hospitals &bull; Staff Admin Portal
              </h1>
              <p className="text-xs text-brand-secondaryText">
                Logged in as: <strong className="text-brand-darkText">{user?.name || 'Administrator'}</strong> ({user?.role || 'STAFF'})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="btn-secondary py-2 px-4 text-xs font-semibold"
            >
              View Live Website
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" /> Sign Out
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-brand-border pb-3">
          <button
            type="button"
            onClick={() => setActiveTab('appointments')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'appointments'
                ? 'bg-brand-orange-600 text-white shadow-xs'
                : 'bg-white text-brand-darkText border border-brand-border hover:bg-brand-cream'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Appointments ({appointments.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'settings'
                ? 'bg-brand-orange-600 text-white shadow-xs'
                : 'bg-white text-brand-darkText border border-brand-border hover:bg-brand-cream'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Hospital Settings &amp; Announcement</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'services'
                ? 'bg-brand-orange-600 text-white shadow-xs'
                : 'bg-white text-brand-darkText border border-brand-border hover:bg-brand-cream'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Services ({verifiedServices.length})</span>
          </button>
        </div>

        {/* Tab 1: Appointments Management */}
        {activeTab === 'appointments' && (
          <div className="space-y-4">
            {/* Filters Bar */}
            <div className="hospital-card p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-brand-secondaryText absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search patient, phone, ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white border border-brand-border rounded-xl text-xs text-brand-darkText"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="w-4 h-4 text-brand-secondaryText" />
                <span className="text-xs font-bold text-brand-darkText">Status:</span>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-1.5 bg-white border border-brand-border rounded-xl text-xs font-medium"
                >
                  <option value="all">All Appointments</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="hospital-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FFF9F0] border-b border-brand-border text-brand-darkText font-display font-bold uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="px-4 py-3">Ref ID</th>
                      <th className="px-4 py-3">Patient</th>
                      <th className="px-4 py-3">Service</th>
                      <th className="px-4 py-3">Date &amp; Slot</th>
                      <th className="px-4 py-3">Reason</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/60 text-brand-darkText">
                    {filteredAppointments.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="text-center py-8 text-brand-secondaryText">
                          No appointments matching criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredAppointments.map((apt) => (
                        <tr key={apt.id} className="hover:bg-brand-cream/50 transition-colors">
                          <td className="px-4 py-3 font-mono font-bold text-brand-orange-700">
                            {apt.id}
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-bold">{apt.patientName}</div>
                            <div className="text-[11px] text-brand-secondaryText">
                              {apt.mobileNumber} {apt.patientType === 'existing' && '• (Follow-up)'}
                            </div>
                          </td>
                          <td className="px-4 py-3 max-w-xs truncate">{apt.serviceType}</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div>{apt.preferredDate}</div>
                            <div className="text-[10px] text-brand-secondaryText">{apt.preferredTime}</div>
                          </td>
                          <td className="px-4 py-3 max-w-xs truncate text-brand-secondaryText">
                            {apt.reasonForVisit}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span
                              className={`px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider ${
                                apt.status === 'confirmed'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : apt.status === 'pending'
                                  ? 'bg-amber-100 text-amber-800'
                                  : apt.status === 'completed'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {apt.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right whitespace-nowrap space-x-1.5">
                            {apt.status === 'pending' && (
                              <button
                                type="button"
                                onClick={() => handleUpdateStatus(apt.id, 'confirmed')}
                                className="px-2 py-1 bg-emerald-600 text-white rounded text-[10px] font-bold hover:bg-emerald-700"
                              >
                                Confirm
                              </button>
                            )}
                            {apt.status === 'confirmed' && (
                              <button
                                type="button"
                                onClick={() => handleUpdateStatus(apt.id, 'completed')}
                                className="px-2 py-1 bg-blue-600 text-white rounded text-[10px] font-bold hover:bg-blue-700"
                              >
                                Mark Done
                              </button>
                            )}
                            {apt.status !== 'cancelled' && (
                              <button
                                type="button"
                                onClick={() => handleUpdateStatus(apt.id, 'cancelled')}
                                className="px-2 py-1 bg-stone-200 text-stone-700 rounded text-[10px] font-bold hover:bg-red-50 hover:text-red-700"
                              >
                                Cancel
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Hospital Settings & Announcements */}
        {activeTab === 'settings' && (
          <div className="hospital-card p-6 sm:p-8 max-w-3xl space-y-6">
            <div>
              <h2 className="font-display font-bold text-2xl text-brand-darkText">
                Hospital Information &amp; Operational Controls
              </h2>
              <p className="text-xs text-brand-secondaryText mt-1">
                Edit clinic telephone, announcement banner, and consultation hours. Changes persist instantly.
              </p>
            </div>

            {saveMessage && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                {saveMessage}
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-5 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-bold text-brand-darkText mb-1">
                  Announcement Bar Notice
                </label>
                <input
                  type="text"
                  value={settings.announcementText}
                  onChange={(e) => setSettings({ ...settings, announcementText: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="announcementActive"
                  checked={settings.announcementActive}
                  onChange={(e) => setSettings({ ...settings, announcementActive: e.target.checked })}
                  className="rounded border-brand-border text-brand-orange-600 focus:ring-brand-orange-500"
                />
                <label htmlFor="announcementActive" className="text-xs font-bold text-brand-darkText cursor-pointer">
                  Display Announcement Bar across Website Header
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-brand-darkText mb-1">
                    Display Phone Number
                  </label>
                  <input
                    type="text"
                    value={settings.phoneDisplay}
                    onChange={(e) => setSettings({ ...settings, phoneDisplay: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-darkText mb-1">
                    Operating Hours Text
                  </label>
                  <input
                    type="text"
                    value={settings.operatingHours}
                    onChange={(e) => setSettings({ ...settings, operatingHours: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-darkText mb-1">
                  Google Maps URL
                </label>
                <input
                  type="text"
                  value={settings.address.googleMapsUrl}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      address: { ...settings.address, googleMapsUrl: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSaving}
                className="btn-primary py-3 px-6 text-xs uppercase tracking-wider font-bold shadow-cta"
              >
                <Save className="w-4 h-4 mr-1.5" />
                {isSaving ? 'Saving Changes...' : 'Save Settings'}
              </button>
            </form>
          </div>
        )}

        {/* Tab 3: Verified Services Architecture */}
        {activeTab === 'services' && (
          <div className="hospital-card p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="font-display font-bold text-2xl text-brand-darkText">
                Clinical Services &amp; Speciality Catalog
              </h2>
              <p className="text-xs text-brand-secondaryText mt-1">
                Admin-controlled architecture ensuring only verified hospital services appear to patients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {verifiedServices.map((service) => (
                <div key={service.id} className="p-4 rounded-2xl bg-white border border-brand-border space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-brand-darkText">
                      {service.title}
                    </span>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full uppercase">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-brand-secondaryText leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <div className="pt-2 text-[11px] text-brand-copper font-medium">
                    Slug: <code className="bg-brand-cream px-1 py-0.5 rounded font-mono">/services/{service.slug}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
