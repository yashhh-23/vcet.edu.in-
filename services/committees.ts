import { get } from './api';

export interface CommitteeSectionResponse<T = Record<string, unknown>> {
  status?: string;
  data?: T;
}

export async function getCommitteeSection<T = Record<string, unknown>>(slug: string): Promise<T> {
  const response = await get<CommitteeSectionResponse<T> | T>(`/pages/committees/${slug}`);
  const payload = (response as CommitteeSectionResponse<T>)?.data ?? response;

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return {} as T;
  }

  return payload as T;
}
