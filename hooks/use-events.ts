import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import type { ChurchEvent } from '@/types/church';

export function useEvents() {
  const { data, error, isLoading } = useSWR<{ data: ChurchEvent[] }>('/api/events', fetcher);
  return { events: data?.data ?? [], error, loading: isLoading };
}
