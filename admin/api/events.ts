import { client } from './client';
import type { ListResponse, ItemResponse, DeleteResponse, Event, EventPayload } from '../types';

function toFormData(payload: EventPayload): FormData {
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

export const eventsApi = {
  list: () =>
    client.request<ListResponse<Event>>('/events'),

  get: (id: number) =>
    client.request<ItemResponse<Event>>(`/events/${id}`),

  create: (payload: EventPayload) =>
    client.requestForm<ItemResponse<Event>>('/events', toFormData(payload)),

  update: (id: number, payload: EventPayload) => {
    const form = toFormData(payload);
    form.append('_method', 'PUT');
    return client.requestForm<ItemResponse<Event>>(`/events/${id}`, form);
  },

  delete: (id: number) =>
    client.request<DeleteResponse>(`/events/${id}`, { method: 'DELETE' }),
};
