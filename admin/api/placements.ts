import { client } from './client';
import type { ListResponse, ItemResponse, DeleteResponse, Placement, PlacementPayload } from '../types';

function toFormData(payload: PlacementPayload): FormData {
  const form = new FormData();
  (Object.entries(payload) as [string, unknown][]).forEach(([key, val]) => {
    if (val === undefined || val === null) return;
    if (val instanceof File) {
      form.append(key, val);
    } else if (typeof val === 'boolean') {
      form.append(key, val ? '1' : '0');
    } else {
      form.append(key, String(val));
    }
  });
  return form;
}

export const placementsApi = {
  list: () =>
    client.request<ListResponse<Placement>>('/placements'),

  get: (id: number) =>
    client.request<ItemResponse<Placement>>(`/placements/${id}`),

  create: (payload: PlacementPayload) =>
    client.requestForm<ItemResponse<Placement>>('/placements', toFormData(payload)),

  update: (id: number, payload: PlacementPayload) => {
    const form = toFormData(payload);
    form.append('_method', 'PUT');
    return client.requestForm<ItemResponse<Placement>>(`/placements/${id}`, form);
  },

  delete: (id: number) =>
    client.request<DeleteResponse>(`/placements/${id}`, { method: 'DELETE' }),
};
