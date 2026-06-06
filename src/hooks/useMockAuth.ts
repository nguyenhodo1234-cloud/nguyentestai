import { useState, useCallback } from "react";
import { authApi } from "../services/api";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<{ fullName: string; email: string } | null>(
    null,
  );

  // Lưu token vào localStorage
  const saveToken = (token: string) =>
    localStorage.setItem("auth_token", token);
  const getToken = () => localStorage.getItem("auth_token");

  const login = useCallback(
    async (data: { email: string; password: string }) => {
      setLoading(true);
      setError(null);
      try {
        const res = await authApi.login(data);
        saveToken(res.token);
        setUser(res.user);
        alert(`✅ ${res.message}\nChào ${res.user.fullName}!`);
      } catch (err: any) {
        setError(err.message);
        alert(`❌ ${err.message}`);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const register = useCallback(
    async (data: { fullName: string; email: string; password: string }) => {
      setLoading(true);
      setError(null);
      try {
        const res = await authApi.register(data);
        saveToken(res.token);
        setUser(res.user);
        alert(`✅ ${res.message}\nChào ${res.user.fullName}!`);
      } catch (err: any) {
        setError(err.message);
        alert(`❌ ${err.message}`);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { loading, error, user, login, register };
}
