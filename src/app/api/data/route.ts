import {
  MOCK_PATIENTS,
  MOCK_NOTES,
  MOCK_CODES,
  MOCK_NOTE_CODES,
  MOCK_RECENT_ACTIVITY,
  DEMO_USER,
  STATS,
} from '@/lib/data';
import { type NextRequest } from 'next/server';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function GET(): Promise<Response> {
  const data = {
    ok: true,
    data: {
      patients: MOCK_PATIENTS,
      notes: MOCK_NOTES,
      codes: MOCK_CODES,
      noteCodes: MOCK_NOTE_CODES,
      activity: MOCK_RECENT_ACTIVITY,
      user: DEMO_USER,
      stats: STATS,
    },
    total: MOCK_PATIENTS.length, // Primary entity count
  };

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

export async function POST(request: NextRequest): Promise<Response> {
  let receivedBody: unknown = {};
  try {
    receivedBody = await request.json();
  } catch (error) {
    // If body is not valid JSON, treat it as an empty object
    receivedBody = {};
  }

  const responseData = {
    ok: true,
    message: 'Demo mode — data not persisted',
    received: receivedBody,
  };

  return new Response(JSON.stringify(responseData), {
    status: 200,
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
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}