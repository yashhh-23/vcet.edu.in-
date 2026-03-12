import { client } from './client';
import type { ListResponse, ItemResponse, DeleteResponse, HeroSlide, HeroSlidePayload } from '../types';

function toFormData(payload: HeroSlidePayload): FormData {
  const form = new FormData();
  (Object.entries(payload) as [string, unknown][]).forEach(([key, val]) => {
    if (val === undefined || val === null) return;
    if (val instanceof File) form.append(key, val);
    else if (typeof val === 'boolean') form.append(key, val ? '1' : '0');
    else form.append(key, String(val));
  });
  return form;
}

export const heroSlidesApi = {
  list: () =>
    client.request<ListResponse<HeroSlide>>('/hero-slides'),

  get: (id: number) =>
    client.request<ItemResponse<HeroSlide>>(`/hero-slides/${id}`),

  create: (payload: HeroSlidePayload) =>
    client.requestForm<ItemResponse<HeroSlide>>('/hero-slides', toFormData(payload)),

  update: (id: number, payload: HeroSlidePayload) => {
    const form = toFormData(payload);
    form.append('_method', 'PUT');
    return client.requestForm<ItemResponse<HeroSlide>>(`/hero-slides/${id}`, form);
  },

  delete: (id: number) =>
    client.request<DeleteResponse>(`/hero-slides/${id}`, { method: 'DELETE' }),
};
