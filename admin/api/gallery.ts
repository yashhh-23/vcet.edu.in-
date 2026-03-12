import { client } from './client';
import type { ListResponse, DeleteResponse, GalleryImage, GalleryPayload } from '../types';

export const galleryApi = {
  list: () =>
    client.request<ListResponse<GalleryImage>>('/gallery'),

  upload: (payload: GalleryPayload) => {
    const form = new FormData();
    form.append('image', payload.image);
    if (payload.caption) form.append('caption', payload.caption);
    return client.requestForm<{ data: GalleryImage; message: string }>('/gallery', form);
  },

  delete: (id: number) =>
    client.request<DeleteResponse>(`/gallery/${id}`, { method: 'DELETE' }),
};
