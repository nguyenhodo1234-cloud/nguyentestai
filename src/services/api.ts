const API_BASE = 'http://localhost:5000/api';

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Có lỗi xảy ra');
  }

  return data as T;
}

export const authApi = {
  login: (body: { email: string; password: string }) =>
    request<{ token: string; user: any; message: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(body),
    }),

  register: (body: { fullName: string; email: string; password: string }) =>
    request<{ token: string; user: any; message: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(body),
    }),

  getMe: (token: string) =>
    request<{ user: any }>('/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    }),
};
