const API_BASE = 'http://localhost:5000/api';

export async function googleLoginAPI(credential: string) {
  const decoded = JSON.parse(atob(credential.split('.')[1]));
  const { sub: googleId, email, name, picture } = decoded;

  const res = await fetch(`${API_BASE}/auth/google`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ googleId, email, fullName: name, avatar: picture }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Lỗi đăng nhập Google');
  return data;
}
