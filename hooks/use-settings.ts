import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import type { ChurchSettings } from '@/types/church';

export function useSettings() {
  const { data, error, isLoading } = useSWR<{ data: ChurchSettings }>('/api/settings', fetcher);
  return { settings: data?.data, error, loading: isLoading };
}
