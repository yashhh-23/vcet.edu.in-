import { client } from './client';
import type { ListResponse, ItemResponse, DeleteResponse, Achievement, AchievementPayload } from '../types';

export const achievementsApi = {
  list: () =>
    client.request<ListResponse<Achievement>>('/achievements'),

  get: (id: number) =>
    client.request<ItemResponse<Achievement>>(`/achievements/${id}`),

  create: (payload: AchievementPayload) =>
    client.request<ItemResponse<Achievement>>('/achievements', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  update: (id: number, payload: AchievementPayload) =>
    client.request<ItemResponse<Achievement>>(`/achievements/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    }),

  delete: (id: number) =>
    client.request<DeleteResponse>(`/achievements/${id}`, { method: 'DELETE' }),
};
