const API_BASE = 'http://localhost:5000/api';

// Dùng Facebook Graph API để lấy thông tin user từ access_token
async function getFacebookUser(accessToken: string) {
  const res = await fetch(
    `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${accessToken}`,
  );
  const data = await res.json();
  return {
    facebookId: data.id,
    email: data.email,
    fullName: data.name,
    avatar: data.picture?.data?.url || '',
  };
}

export async function facebookLoginAPI(accessToken: string) {
  // Lấy thông tin từ Facebook
  const fbUser = await getFacebookUser(accessToken);

  if (!fbUser.email) {
    throw new Error('Không lấy được email từ Facebook. Vui lòng cấp quyền email.');
  }

  // Gửi lên backend
  const res = await fetch(`${API_BASE}/auth/facebook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fbUser),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Lỗi đăng nhập Facebook');
  return data;
}
