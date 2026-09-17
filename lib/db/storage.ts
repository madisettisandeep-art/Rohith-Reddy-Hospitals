import fs from 'fs';
import path from 'path';
import { Appointment, HospitalSettings } from '../types';
import { hospitalSettings as defaultSettings } from '../data/hospital-data';

interface AppDatabase {
  appointments: Appointment[];
  settings: HospitalSettings;
  lastUpdated: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

// Initial seed appointments for demonstration
const initialAppointments: Appointment[] = [
  {
    id: 'RRH-2026-001',
    patientName: 'K. Ramesh',
    mobileNumber: '+91 98490 11223',
    email: 'ramesh.k@example.com',
    preferredDate: '2026-09-18',
    preferredTime: '10:30 AM',
    reasonForVisit: 'Routine Diabetes checkup & HbA1c review',
    patientType: 'existing',
    serviceType: 'Diabetes Management',
    status: 'confirmed',
    notes: 'Prior patient with Dr. Rohith Reddy. Follow-up after 3 months.',
    createdAt: '2026-09-17T08:30:00.000Z',
  },
  {
    id: 'RRH-2026-002',
    patientName: 'P. Sunitha',
    mobileNumber: '+91 94400 45678',
    preferredDate: '2026-09-18',
    preferredTime: '11:15 AM',
    reasonForVisit: 'Persistent fever and fatigue over past 3 days',
    patientType: 'new',
    serviceType: 'General Physician Care',
    status: 'pending',
    createdAt: '2026-09-17T09:45:00.000Z',
  },
  {
    id: 'RRH-2026-003',
    patientName: 'V. Satyanarayana',
    mobileNumber: '+91 98850 78901',
    preferredDate: '2026-09-19',
    preferredTime: '06:00 PM',
    reasonForVisit: 'Chest heaviness and ECG evaluation',
    patientType: 'new',
    serviceType: 'ECG / Heart Health Assessment',
    status: 'confirmed',
    createdAt: '2026-09-17T10:15:00.000Z',
  },
];

let inMemoryStore: AppDatabase = {
  appointments: [...initialAppointments],
  settings: { ...defaultSettings },
  lastUpdated: new Date().toISOString(),
};

function ensureInitialized() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(DB_FILE)) {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      inMemoryStore = JSON.parse(content);
    } else {
      fs.writeFileSync(DB_FILE, JSON.stringify(inMemoryStore, null, 2), 'utf-8');
    }
  } catch (err) {
    // If file operations fail in serverless or restricted disk environments, stay safely in memory
    console.warn('[Storage] Operating in memory mode:', err);
  }
}

function persistStore() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(inMemoryStore, null, 2), 'utf-8');
  } catch (err) {
    console.warn('[Storage] Could not persist to disk, kept in memory:', err);
  }
}

ensureInitialized();

export const storage = {
  getAppointments(): Appointment[] {
    return [...inMemoryStore.appointments].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },

  createAppointment(appointment: Omit<Appointment, 'id' | 'createdAt' | 'status'>): Appointment {
    const newId = `RRH-${new Date().getFullYear()}-${String(inMemoryStore.appointments.length + 1).padStart(3, '0')}`;
    const record: Appointment = {
      ...appointment,
      id: newId,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    inMemoryStore.appointments.unshift(record);
    persistStore();
    return record;
  },

  updateAppointmentStatus(id: string, status: Appointment['status'], notes?: string): Appointment | null {
    const apt = inMemoryStore.appointments.find((a) => a.id === id);
    if (!apt) return null;
    apt.status = status;
    if (notes !== undefined) {
      apt.notes = notes;
    }
    persistStore();
    return apt;
  },

  getSettings(): HospitalSettings {
    return { ...inMemoryStore.settings };
  },

  updateSettings(updates: Partial<HospitalSettings>): HospitalSettings {
    inMemoryStore.settings = {
      ...inMemoryStore.settings,
      ...updates,
    };
    persistStore();
    return { ...inMemoryStore.settings };
  },
};
