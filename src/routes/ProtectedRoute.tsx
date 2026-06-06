import { Navigate, Outlet } from 'react-router-dom';

function getUser(): { role: string } | null {
  try {
    const stored = localStorage.getItem('auth_user');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function ProtectedRoute() {
  const user = getUser();
  const token = localStorage.getItem('auth_token');

  // Chưa đăng nhập
  if (!token || !user) {
    return <Navigate to="/auth" replace />;
  }

  // Không phải admin
  if (user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-red-500/10 flex items-center justify-center">
            <span className="text-4xl">🔒</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Access Denied</h1>
          <p className="text-slate-400 mb-6 max-w-md">
            Bạn cần quyền <span className="text-blue-400 font-semibold">Admin</span> để truy cập trang này.
            Vui lòng đăng nhập bằng tài khoản admin.
          </p>
          <a
            href="/auth"
            className="inline-flex px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Đi đến trang đăng nhập
          </a>
        </div>
      </div>
    );
  }

  return <Outlet />;
}
