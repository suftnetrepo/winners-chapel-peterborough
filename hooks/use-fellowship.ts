import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import type { FellowshipGroup } from '@/types/church';

export function useFellowship() {
  const { data, error, isLoading } = useSWR<{ data: FellowshipGroup[] }>('/api/fellowship', fetcher);
  return { groups: data?.data ?? [], error, loading: isLoading };
}
