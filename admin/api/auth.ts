import { client } from './client';
import type { User } from '../types';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  user: User;
}

export const authApi = {
  /** POST /api/auth/login — returns { success, message, token, user } */
  login: (payload: LoginPayload) =>
    client.request<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  /** POST /api/auth/logout — invalidates the Bearer token */
  logout: () =>
    client.request<{ success: boolean; message: string }>('/auth/logout', { method: 'POST' }),
};
