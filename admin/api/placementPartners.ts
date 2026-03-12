import { client } from './client';
import type { ListResponse, ItemResponse, DeleteResponse, PlacementPartner, PlacementPartnerPayload } from '../types';

function toFormData(payload: PlacementPartnerPayload): FormData {
  const form = new FormData();
  (Object.entries(payload) as [string, unknown][]).forEach(([key, val]) => {
    if (val === undefined || val === null) return;
    if (val instanceof File) form.append(key, val);
    else if (typeof val === 'boolean') form.append(key, val ? '1' : '0');
    else form.append(key, String(val));
  });
  return form;
}

export const placementPartnersApi = {
  list: () =>
    client.request<ListResponse<PlacementPartner>>('/placement-partners'),

  get: (id: number) =>
    client.request<ItemResponse<PlacementPartner>>(`/placement-partners/${id}`),

  create: (payload: PlacementPartnerPayload) =>
    client.requestForm<ItemResponse<PlacementPartner>>('/placement-partners', toFormData(payload)),

  update: (id: number, payload: PlacementPartnerPayload) => {
    const form = toFormData(payload);
    form.append('_method', 'PUT');
    return client.requestForm<ItemResponse<PlacementPartner>>(`/placement-partners/${id}`, form);
  },

  delete: (id: number) =>
    client.request<DeleteResponse>(`/placement-partners/${id}`, { method: 'DELETE' }),
};
