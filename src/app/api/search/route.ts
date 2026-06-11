import {
  MOCK_PATIENTS,
  MOCK_NOTES,
  MOCK_CODES,
} from '@/lib/data';
import { type NextRequest } from 'next/server';
import { Patient, Note, Code } from '@/lib/types';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

type SearchResult =
  | (Patient & { type: 'patient' })
  | (Note & { type: 'note' })
  | (Code & { type: 'code' });

export async function GET(request: NextRequest): Promise<Response> {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get('q') || '';
  const type = searchParams.get('type'); // optional: 'patient', 'note', 'code'
  const lowerCaseQuery = query.toLowerCase();

  let results: SearchResult[] = [];

  if (!query) {
    // If query is empty, return first 5 patients
    const defaultResults: SearchResult[] = MOCK_PATIENTS.slice(0, 5).map(p => ({ ...p, type: 'patient' }));
    return new Response(JSON.stringify({
      ok: true,
      data: {
        results: defaultResults,
        total: defaultResults.length,
        query: query,
      },
    }), {
      headers: {
        'Content-Type': 'application/json',
        ...CORS_HEADERS,
      },
    });
  }

  // Search Patients
  if (!type || type === 'patient') {
    MOCK_PATIENTS.forEach((patient) => {
      if (
        patient.firstName.toLowerCase().includes(lowerCaseQuery) ||
        patient.lastName.toLowerCase().includes(lowerCaseQuery) ||
        patient.id.toLowerCase().includes(lowerCaseQuery)
      ) {
        results.push({ ...patient, type: 'patient' });
      }
    });
  }

  // Search Notes
  if (!type || type === 'note') {
    MOCK_NOTES.forEach((note) => {
      if (
        note.rawInput.toLowerCase().includes(lowerCaseQuery) ||
        (note.soapSubjective && note.soapSubjective.toLowerCase().includes(lowerCaseQuery)) ||
        (note.soapObjective && note.soapObjective.toLowerCase().includes(lowerCaseQuery)) ||
        (note.soapAssessment && note.soapAssessment.toLowerCase().includes(lowerCaseQuery)) ||
        (note.soapPlan && note.soapPlan.toLowerCase().includes(lowerCaseQuery)) ||
        note.id.toLowerCase().includes(lowerCaseQuery)
      ) {
        results.push({ ...note, type: 'note' });
      }
    });
  }

  // Search Codes
  if (!type || type === 'code') {
    MOCK_CODES.forEach((code) => {
      if (
        code.code.toLowerCase().includes(lowerCaseQuery) ||
        code.description.toLowerCase().includes(lowerCaseQuery) ||
        code.id.toLowerCase().includes(lowerCaseQuery)
      ) {
        results.push({ ...code, type: 'code' });
      }
    });
  }

  // Ensure unique results (by id and type, as different types might have same IDs)
  const uniqueResults = Array.from(new Map(results.map(item => [`${item.id}-${item.type}`, item])).values());

  const paginatedResults = uniqueResults.slice(0, 20);

  return new Response(JSON.stringify({
    ok: true,
    data: {
      results: paginatedResults,
      total: paginatedResults.length,
      query: query,
    },
  }), {
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}