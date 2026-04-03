import { get } from './api';

export interface StudentCareerSectionResponse<T = Record<string, unknown>> {
  status?: string;
  data?: T;
}

export async function getStudentCareerSection<T = Record<string, unknown>>(slug: string): Promise<T> {
  const response = await get<StudentCareerSectionResponse<T> | T>(`/pages/student-career/${slug}`);
  const payload = (response as StudentCareerSectionResponse<T>)?.data ?? response;

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return {} as T;
  }

  return payload as T;
}
