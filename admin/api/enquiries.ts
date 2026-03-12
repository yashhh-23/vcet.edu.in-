import { client } from './client';
import type { ListResponse, Enquiry } from '../types';

export const enquiriesApi = {
  list: (page = 1) =>
    client.request<ListResponse<Enquiry>>(`/enquiries?page=${page}`),
};
