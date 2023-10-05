import useSRW, { Fetcher } from 'swr';

import { api } from '../constants/api';
import { TeamMember } from '../constants/types';

export function useTeamMembers() {
  const fetcher: Fetcher<TeamMember[]> = (url: string) =>
    api
      .get(url)
      .then((res) => res.data)
      .catch((err) => err);

  const { data, error, isLoading, mutate } = useSRW('/names', fetcher);

  return { data, error, isLoading, mutate };
}
