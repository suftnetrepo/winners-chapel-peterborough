import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import type { RegularService } from '@/types/church';

export function useRegularServices() {
  const { data, error, isLoading } = useSWR<{ data: RegularService[] }>('/api/regular-services', fetcher);
  return { services: data?.data ?? [], error, loading: isLoading };
}
