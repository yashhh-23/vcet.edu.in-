import { client } from './client';
import type { ListResponse, ItemResponse, DeleteResponse, NewsTicker, NewsTickerPayload } from '../types';

export const newsTickerApi = {
  list: () =>
    client.request<ListResponse<NewsTicker>>('/news-ticker'),

  get: (id: number) =>
    client.request<ItemResponse<NewsTicker>>(`/news-ticker/${id}`),

  create: (payload: NewsTickerPayload) =>
    client.request<ItemResponse<NewsTicker>>('/news-ticker', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  update: (id: number, payload: NewsTickerPayload) =>
    client.request<ItemResponse<NewsTicker>>(`/news-ticker/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    }),

  delete: (id: number) =>
    client.request<DeleteResponse>(`/news-ticker/${id}`, { method: 'DELETE' }),
};
