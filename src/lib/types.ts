export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string;
  joinedAt: string;
}

export interface Patient {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string; // YYYY-MM-DD
  gender: 'Male' | 'Female' | 'Other';
  contactEmail?: string;
  contactPhone?: string;
  status: 'active' | 'inactive' | 'archived';
  createdAt: string;
  updatedAt: string;
}

export interface AuditTrailEntry {
  timestamp: string;
  action: 'create' | 'update' | 'export' | 'archive';
  userId: string;
  userName: string;
  details: string; // e.g., "Updated SOAP Plan", "Exported to PDF"
}

export interface Note {
  id: string;
  userId: string;
  patientId: string;
  rawInput: string; // Clinician's plain language input
  soapSubjective: string;
  soapObjective: string;
  soapAssessment: string;
  soapPlan: string;
  icd10Codes: string[]; // Array of ICD-10 codes
  cptCodes: string[]; // Array of CPT codes
  status: 'draft' | 'completed' | 'billed' | 'archived';
  createdAt: string;
  updatedAt: string;
  auditTrail: AuditTrailEntry[];
}

export interface Code {
  id: string;
  type: 'ICD-10' | 'CPT';
  code: string;
  description: string;
}

export interface NoteCode {
  noteId: string;
  codeId: string;
}

export interface RecentActivityItem {
  id: string;
  userId: string;
  type: 'note_created' | 'note_updated' | 'note_billed' | 'patient_added';
  description: string;
  timestamp: string;
  targetId: string; // ID of the note or patient
  patientName?: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  tooltip?: string;
}

export interface ChartData {
  name: string;
  value: number;
}