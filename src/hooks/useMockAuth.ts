import { useState, useCallback } from 'react';

export function useMockAuth() {
  const [loading, setLoading] = useState(false);

  const login = useCallback(async (data: { email: string; password: string }) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    alert(`Đăng nhập thành công!\nEmail: ${data.email}`);
  }, []);

  const register = useCallback(async (data: { fullName: string; email: string; password: string }) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    alert(`Đăng ký thành công!\n${data.fullName} — ${data.email}`);
  }, []);

  return { loading, login, register };
}
