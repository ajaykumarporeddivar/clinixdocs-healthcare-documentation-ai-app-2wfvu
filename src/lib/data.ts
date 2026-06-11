import {
  DemoUser,
  Patient,
  Note,
  Code,
  NoteCode,
  RecentActivityItem,
} from './types';

// Helper function to get a random date in the last year
const getRandomDateInLastYear = (): string => {
  const now = new Date();
  const yearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
  const randomTimestamp = yearAgo.getTime() + Math.random() * (now.getTime() - yearAgo.getTime());
  return new Date(randomTimestamp).toISOString();
};

export const DEMO_USER: DemoUser = {
  id: 'user-001',
  name: 'Dr. Evelyn Reed',
  email: 'evelyn.reed@clinixdocs.com',
  role: 'Clinician',
  plan: 'Pro Plan',
  avatar: 'ER',
  joinedAt: '2023-08-15T10:00:00Z',
};

export const MOCK_PATIENTS: Patient[] = [
  {
    id: 'pat-001',
    userId: DEMO_USER.id,
    firstName: 'Alice',
    lastName: 'Smith',
    dateOfBirth: '1990-05-15',
    gender: 'Female',
    contactEmail: 'alice.smith@example.com',
    contactPhone: '555-123-4567',
    status: 'active',
    createdAt: getRandomDateInLastYear(),
    updatedAt: getRandomDateInLastYear(),
  },
  {
    id: 'pat-002',
    userId: DEMO_USER.id,
    firstName: 'Robert',
    lastName: 'Johnson',
    dateOfBirth: '1982-11-22',
    gender: 'Male',
    contactEmail: 'robert.johnson@example.com',
    contactPhone: '555-987-6543',
    status: 'active',
    createdAt: getRandomDateInLastYear(),
    updatedAt: getRandomDateInLastYear(),
  },
  {
    id: 'pat-003',
    userId: DEMO_USER.id,
    firstName: 'Maria',
    lastName: 'Garcia',
    dateOfBirth: '1975-03-10',
    gender: 'Female',
    contactEmail: 'maria.garcia@example.com',
    contactPhone: '555-555-1212',
    status: 'active',
    createdAt: getRandomDateInLastYear(),
    updatedAt: getRandomDateInLastYear(),
  },
  {
    id: 'pat-004',
    userId: DEMO_USER.id,
    firstName: 'David',
    lastName: 'Lee',
    dateOfBirth: '1995-07-01',
    gender: 'Male',
    contactEmail: 'david.lee@example.com',
    contactPhone: '555-333-7777',
    status: 'inactive',
    createdAt: getRandomDateInLastYear(),
    updatedAt: getRandomDateInLastYear(),
  },
  {
    id: 'pat-005',
    userId: DEMO_USER.id,
    firstName: 'Sophia',
    lastName: 'Martinez',
    dateOfBirth: '1968-01-20',
    gender: 'Female',
    contactEmail: 'sophia.m@example.com',
    contactPhone: '555-888-2222',
    status: 'active',
    createdAt: getRandomDateInLastYear(),
    updatedAt: getRandomDateInLastYear(),
  },
  {
    id: 'pat-006',
    userId: DEMO_USER.id,
    firstName: 'James',
    lastName: 'Brown',
    dateOfBirth: '2000-09-08',
    gender: 'Male',
    contactEmail: 'james.brown@example.com',
    contactPhone: '555-666-1111',
    status: 'archived',
    createdAt: getRandomDateInLastYear(),
    updatedAt: getRandomDateInLastYear(),
  },
];

export const MOCK_NOTES: Note[] = [
  {
    id: 'note-001',
    userId: DEMO_USER.id,
    patientId: 'pat-001',
    rawInput: "Patient reports feeling anxious, difficulty sleeping, some panic attacks. Goal is to manage anxiety and improve sleep. Discussed CBT techniques.",
    soapSubjective: "Patient reports increased feelings of anxiety over the past two weeks, accompanied by difficulty initiating and maintaining sleep. Experiences 2-3 panic attacks per week, often in social situations. Expresses a desire to regain control and improve daily functioning.",
    soapObjective: "Patient presented with a slightly elevated heart rate and occasional fidgeting during the session. Affect was anxious but cooperative. Eye contact maintained. Denies suicidal ideation. Scores 22 on GAD-7, indicating severe anxiety.",
    soapAssessment: "34-year-old female presenting with symptoms consistent with Generalized Anxiety Disorder and Panic Disorder. Current stressors include work deadlines and family obligations. Responds well to therapeutic alliance. Progress towards goals is currently limited by acute symptoms.",
    soapPlan: "1. Continue weekly psychotherapy sessions focusing on Cognitive Behavioral Therapy (CBT) techniques for anxiety and panic management. 2. Introduce diaphragmatic breathing exercises and progressive muscle relaxation for daily practice. 3. Refer for psychiatric evaluation for potential medication management. 4. Schedule follow-up in 1 week.",
    status: 'billed',
    createdAt: '2024-07-29T10:30:00Z',
    updatedAt: '2024-07-29T11:00:00Z',
  },
  {
    id: 'note-002',
    userId: DEMO_USER.id,
    patientId: 'pat-002',
    rawInput: "65-year-old male with chronic back pain, worse after activity. Takes ibuprofen PRN. Wants to explore non-pharmacological options. Exam shows mild tenderness L4-L5.",
    soapSubjective: "Patient reports chronic lower back pain (LBP) rated 6/10, exacerbated by prolonged standing and lifting. Pain radiates to left gluteal region. Takes ibuprofen 400mg PRN with temporary relief. Reports feeling stiff in mornings. Goal is to reduce pain and improve mobility.",
    soapObjective: "Physical exam reveals mild tenderness to palpation over L4-L5 lumbar spine. Range of motion slightly limited in lumbar flexion. Straight leg raise negative bilaterally. Neurological exam intact. Gait normal.",
    soapAssessment: "65-year-old male with chronic mechanical lower back pain. Likely myofascial component. No red flags for radiculopathy or serious spinal pathology. Patient is motivated for conservative management.",
    soapPlan: "1. Physical therapy referral for core strengthening and stretching exercises. 2. Education on proper body mechanics and posture. 3. Continue ibuprofen PRN, consider topical NSAID. 4. Follow-up in 3 weeks to assess progress.",
    status: 'completed',
    createdAt: '2024-07-28T14:00:00Z',
    updatedAt: '2024-07-28T14:45:00Z',
  },
  {
    id: 'note-003',
    userId: DEMO_USER.id,
    patientId: 'pat-003',
    rawInput: "Child presents with cough, runny nose, low-grade fever. Symptoms started 2 days ago. Parents concerned about possible flu.",
    soapSubjective: "Parents report 5-year-old female presented with cough, clear rhinorrhea, and low-grade fever (100.2 F) for 2 days. Child is active and playful but appears tired. No difficulty breathing or ear pulling. Eating and drinking well.",
    soapObjective: "Vital signs stable. Oropharynx mildly erythematous. Lungs clear to auscultation bilaterally, no wheezes or rales. Tympanic membranes clear. No cervical lymphadenopathy. Rapid Flu test negative.",
    soapAssessment: "5-year-old female with upper respiratory infection (URI), likely viral. Symptoms are mild and self-limiting. No signs of bacterial infection or complications.",
    soapPlan: "1. Symptomatic treatment: hydration, acetaminophen for fever if needed, saline nasal drops. 2. Advise parents on watchful waiting for worsening symptoms (e.g., persistent high fever, difficulty breathing). 3. No antibiotics prescribed. 4. Follow-up PRN.",
    status: 'draft',
    createdAt: '2024-07-27T09:15:00Z',
    updatedAt: '2024-07-27T09:30:00Z',
  },
  {
    id: 'note-004',
    userId: DEMO_USER.id,
    patientId: 'pat-001',
    rawInput: "Follow-up for anxiety. Patient reports reduced panic attacks, better sleep. Still some social anxiety. Wants to work on exposure therapy.",
    soapSubjective: "Patient reports significant improvement in anxiety symptoms since last session. Panic attacks reduced to once a week. Sleep duration and quality improved. Continues to experience mild social anxiety, particularly in large groups. Expresses readiness to begin exposure exercises.",
    soapObjective: "Patient presented with a calm demeanor. GAD-7 score 15, indicating moderate anxiety (down from 22). Affect appropriate. Engaged actively in discussion regarding homework assignments.",
    soapAssessment: "34-year-old female with GAD and Panic Disorder, showing good response to CBT and behavioral interventions. Motivated to engage in exposure therapy. Symptoms are well-managed but not fully resolved.",
    soapPlan: "1. Continue CBT. 2. Introduce graded in-vivo exposure hierarchy for social situations. 3. Review progress on breathing exercises. 4. Follow-up in 1 week.",
    status: 'completed',
    createdAt: '2024-07-22T11:00:00Z',
    updatedAt: '2024-07-22T11:45:00Z',
  },
  {
    id: 'note-005',
    userId: DEMO_USER.id,
    patientId: 'pat-005',
    rawInput: "New patient consultation for hypertension. 56-year-old female. BP 145/90. Family history of heart disease. Needs lifestyle counseling and medication review.",
    soapSubjective: "56-year-old female presenting for initial consultation regarding elevated blood pressure. Reports occasional headaches and dizziness but generally asymptomatic. Family history significant for hypertension and coronary artery disease in both parents. Denies smoking. Drinks alcohol socially. Diet generally healthy, but reports high sodium intake. Current medications: multivitamin.",
    soapObjective: "BP 145/90 mmHg (average of two readings). Heart rate 72 bpm, regular. BMI 28. Physical exam otherwise unremarkable: Lungs clear, S1S2 regular, no edema. Labs reviewed: WNL except for LDL 135 mg/dL.",
    soapAssessment: "56-year-old female with Stage 1 Hypertension and dyslipidemia. Elevated cardiovascular risk due to family history. Patient is amenable to lifestyle modifications.",
    soapPlan: "1. Initiate lifestyle counseling: DASH diet, sodium restriction, regular exercise (30 mins moderate intensity, 5x/week). 2. Consider initiating ACE inhibitor or ARB for BP control. 3. Refer for ophthalmology consult for hypertensive retinopathy screening. 4. Follow-up in 4 weeks for BP recheck and medication adjustment.",
    status: 'reviewed',
    createdAt: '2024-07-20T08:30:00Z',
    updatedAt: '2024-07-20T09:15:00Z',
  },
  {
    id: 'note-006',
    userId: DEMO_USER.id,
    patientId: 'pat-004',
    rawInput: "Telehealth follow-up for depression. Patient reports stable mood, adherence to medication. Wants to discuss returning to work.",
    soapSubjective: "Patient reports stable mood over the past month, with significantly reduced anhedonia and increased energy levels. Fully adherent to Sertraline 50mg daily. Expresses readiness to explore options for returning to work part-time.",
    soapObjective: "Patient appeared well-groomed and cooperative during telehealth visit. Affect euthymic. Speech normal rate and rhythm. Denies suicidal ideation. PHQ-9 score 6, indicating mild depressive symptoms (down from 18).",
    soapAssessment: "30-year-old male with Major Depressive Disorder, currently in remission with medication and therapy. Functioning well and motivated for vocational rehabilitation.",
    soapPlan: "1. Continue Sertraline 50mg daily. 2. Discuss strategies for gradual return to work, including part-time options and workplace accommodations. 3. Refer to vocational rehabilitation specialist. 4. Follow-up in 6 weeks.",
    status: 'draft',
    createdAt: '2024-07-15T16:00:00Z',
    updatedAt: '2024-07-15T16:20:00Z',
  },
];

export const MOCK_CODES: Code[] = [
  {
    id: 'code-001',
    type: 'ICD-10',
    code: 'F41.1',
    description: 'Generalized anxiety disorder',
    status: 'active',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z',
  },
  {
    id: 'code-002',
    type: 'ICD-10',
    code: 'F41.0',
    description: 'Panic disorder [episodic paroxysmal anxiety] without agoraphobia',
    status: 'active',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z',
  },
  {
    id: 'code-003',
    type: 'CPT',
    code: '90834',
    description: 'Psychotherapy, 45 minutes with patient',
    status: 'active',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z',
  },
  {
    id: 'code-004',
    type: 'ICD-10',
    code: 'M54.5',
    description: 'Low back pain',
    status: 'active',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z',
  },
  {
    id: 'code-005',
    type: 'CPT',
    code: '99213',
    description: 'Office or other outpatient visit, established patient, 15-29 minutes',
    status: 'active',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z',
  },
  {
    id: 'code-006',
    type: 'ICD-10',
    code: 'J06.9',
    description: 'Acute upper respiratory infection, unspecified',
    status: 'active',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z',
  },
];

export const MOCK_NOTECODES: NoteCode[] = [
  { id: 'nc-001', noteId: 'note-001', codeId: 'code-001', status: 'active', createdAt: getRandomDateInLastYear(), updatedAt: getRandomDateInLastYear() },
  { id: 'nc-002', noteId: 'note-001', codeId: 'code-002', status: 'active', createdAt: getRandomDateInLastYear(), updatedAt: getRandomDateInLastYear() },
  { id: 'nc-003', noteId: 'note-001', codeId: 'code-003', status: 'active', createdAt: getRandomDateInLastYear(), updatedAt: getRandomDateInLastYear() },
  { id: 'nc-004', noteId: 'note-002', codeId: 'code-004', status: 'active', createdAt: getRandomDateInLastYear(), updatedAt: getRandomDateInLastYear() },
  { id: 'nc-005', noteId: 'note-002', codeId: 'code-005', status: 'active', createdAt: getRandomDateInLastYear(), updatedAt: getRandomDateInLastYear() },
  { id: 'nc-006', noteId: 'note-003', codeId: 'code-006', status: 'active', createdAt: getRandomDateInLastYear(), updatedAt: getRandomDateInLastYear() },
];

export const STATS = {
  totalRevenue: '$284,520',
  revenueGrowth: '+18.4%',
  activeUsers: 1847,
  userGrowth: '+12.1%',
};

export const CHART_DATA = {
  weekly: [42, 58, 51, 73, 88, 65, 79, 94], // Represents daily notes completed
  labels: ['Jul W1', 'Jul W2', 'Jul W3', 'Jul W4', 'Aug W1', 'Aug W2', 'Aug W3', 'Aug W4'],
  revenue: [18200, 22400, 19800, 31200, 28500, 33100, 29800, 35600], // Example weekly billable revenue
};

export const RECENT_ACTIVITY: RecentActivityItem[] = [
  { id: '1', action: 'Completed new note for Alice Smith', user: 'Dr. Evelyn Reed', avatar: 'ER', time: '2 minutes ago', type: 'create' },
  { id: '2', action: 'Reviewed claim codes for Robert Johnson', user: 'Dr. Evelyn Reed', avatar: 'ER', time: '1 hour ago', type: 'update' },
  { id: '3', action: 'Generated SOAP note for Maria Garcia', user: 'Dr. Evelyn Reed', avatar: 'ER', time: '3 hours ago', type: 'create' },
  { id: '4', action: 'Edited note for Alice Smith', user: 'Dr. Evelyn Reed', avatar: 'ER', time: '1 day ago', type: 'update' },
  { id: '5', action: 'Added new patient Sophia Martinez', user: 'Dr. Evelyn Reed', avatar: 'ER', time: '2 days ago', type: 'create' },
  { id: '6', action: 'Archived patient James Brown', user: 'Dr. Evelyn Reed', avatar: 'ER', time: '3 days ago', type: 'delete' },
];

export function getById<T extends { id: string }>(arr: T[], id: string): T | undefined {
  return arr.find(x => x.id === id);
}