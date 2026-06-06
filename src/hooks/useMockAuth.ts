import { useState, useCallback } from "react";
import { authApi } from "../services/api";
import { googleLoginAPI } from "../services/googleAuth";
import { facebookLoginAPI } from "../services/facebookAuth";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<{ fullName: string; email: string } | null>(
    null,
  );

  const saveToken = (
    token: string,
    userData: { fullName: string; email: string; role?: string },
  ) => {
    localStorage.setItem("auth_token", token);
    localStorage.setItem("auth_user", JSON.stringify(userData));
    setUser(userData);
  };

  const login = useCallback(
    async (data: { email: string; password: string }) => {
      setLoading(true);
      setError(null);
      try {
        const res = await authApi.login(data);
        saveToken(res.token, res.user);
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
        saveToken(res.token, res.user);
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

  // Google Login
  const googleLogin = useCallback(async (credential: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await googleLoginAPI(credential);
      saveToken(res.token, res.user);
      alert(`✅ ${res.message}\nChào ${res.user.fullName}!`);
    } catch (err: any) {
      setError(err.message);
      alert(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  // Facebook Login
  const facebookLogin = useCallback(async (accessToken: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await facebookLoginAPI(accessToken);
      saveToken(res.token, res.user);
      alert(`✅ ${res.message}\nChào ${res.user.fullName}!`);
    } catch (err: any) {
      setError(err.message);
      alert(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, user, login, register, googleLogin, facebookLogin };
}
