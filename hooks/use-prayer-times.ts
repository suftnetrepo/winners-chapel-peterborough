import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import type { RegularService } from '@/types/church';

export function usePrayerTimes() {
  const { data, error, isLoading } = useSWR<{ data: RegularService[] }>('/api/prayer-times', fetcher);
  return { prayerTimes: data?.data ?? [], error, loading: isLoading };
}
