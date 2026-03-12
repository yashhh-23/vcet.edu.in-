import { client } from './client';
import type { ListResponse, ItemResponse, DeleteResponse, Testimonial, TestimonialPayload } from '../types';

function toFormData(payload: TestimonialPayload): FormData {
  const form = new FormData();
  (Object.entries(payload) as [string, unknown][]).forEach(([key, val]) => {
    if (val === undefined || val === null) return;
    if (val instanceof File) form.append(key, val);
    else if (typeof val === 'boolean') form.append(key, val ? '1' : '0');
    else form.append(key, String(val));
  });
  return form;
}

export const testimonialsApi = {
  list: () =>
    client.request<ListResponse<Testimonial>>('/testimonials'),

  get: (id: number) =>
    client.request<ItemResponse<Testimonial>>(`/testimonials/${id}`),

  create: (payload: TestimonialPayload) =>
    client.requestForm<ItemResponse<Testimonial>>('/testimonials', toFormData(payload)),

  update: (id: number, payload: TestimonialPayload) => {
    const form = toFormData(payload);
    form.append('_method', 'PUT');
    return client.requestForm<ItemResponse<Testimonial>>(`/testimonials/${id}`, form);
  },

  delete: (id: number) =>
    client.request<DeleteResponse>(`/testimonials/${id}`, { method: 'DELETE' }),
};
