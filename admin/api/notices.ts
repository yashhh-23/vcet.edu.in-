import { client } from './client';
import type { ListResponse, ItemResponse, DeleteResponse, Notice, NoticePayload } from '../types';

function toFormData(payload: NoticePayload): FormData {
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

export const noticesApi = {
  list: () =>
    client.request<ListResponse<Notice>>('/notices'),

  get: (id: number) =>
    client.request<ItemResponse<Notice>>(`/notices/${id}`),

  create: (payload: NoticePayload) =>
    client.requestForm<ItemResponse<Notice>>('/notices', toFormData(payload)),

  update: (id: number, payload: NoticePayload) => {
    const form = toFormData(payload);
    form.append('_method', 'PUT'); // Laravel method spoofing
    return client.requestForm<ItemResponse<Notice>>(`/notices/${id}`, form);
  },

  delete: (id: number) =>
    client.request<DeleteResponse>(`/notices/${id}`, { method: 'DELETE' }),
};
