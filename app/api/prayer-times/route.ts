import { NextResponse } from 'next/server';
import { api } from '@/lib/api-client';
import { handleApiError, normalizeApiError } from '@/lib/api-error';

export async function GET() {
  try {
    const { data } = await api.get('/regularService/get/prayer');
    return NextResponse.json(data);
  } catch (error) {
    return handleApiError(normalizeApiError(error));
  }
}
