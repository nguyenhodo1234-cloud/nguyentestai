import { useEffect, useCallback, useState } from 'react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

interface FacebookLoginButtonProps {
  onSuccess: (accessToken: string) => void;
  loading?: boolean;
}

export default function FacebookLoginButton({ onSuccess, loading }: FacebookLoginButtonProps) {
  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    // Load Facebook SDK
    if (window.FB) {
      setSdkReady(true);
      return;
    }

    window.fbAsyncInit = () => {
      window.FB.init({
        appId: import.meta.env.VITE_FACEBOOK_APP_ID || '',
        cookie: true,
        xfbml: true,
        version: 'v19.0',
      });
      setSdkReady(true);
    };

    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.id = 'facebook-jssdk';
    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById('facebook-jssdk');
      if (existing) existing.remove();
    };
  }, []);

  const handleLogin = useCallback(() => {
    if (!window.FB) {
      alert('❌ Facebook SDK chưa sẵn sàng. Vui lòng thử lại.');
      return;
    }

    window.FB.login(
      (response: any) => {
        if (response.authResponse) {
          onSuccess(response.authResponse.accessToken);
        } else {
          alert('❌ Đăng nhập Facebook thất bại. Vui lòng thử lại.');
        }
      },
      { scope: 'email,public_profile' },
    );
  }, [onSuccess]);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 opacity-50 cursor-not-allowed">
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Facebook</span>
      </div>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleLogin}
      disabled={!sdkReady}
      className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700
        text-sm font-semibold text-slate-700 dark:text-slate-300
        hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
      <span>Facebook</span>
    </motion.button>
  );
}
