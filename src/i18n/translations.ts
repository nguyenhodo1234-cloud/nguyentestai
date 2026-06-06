export type Lang = 'vi' | 'en';

export type TranslationKey = keyof typeof vi;

export const vi = {
  // Header / Top bar
  'header.login': 'Đăng nhập',
  'header.menu': 'Menu',
  'header.close_menu': 'Đóng menu',
  'header.open_menu': 'Mở menu',

  // Nav
  'nav.about': 'UltraViewer là gì?',
  'nav.download': 'Tải xuống',
  'nav.guide': 'Hướng dẫn',
  'nav.pricing': 'Bảng giá',
  'nav.blog': 'Blog',

  // Breadcrumb
  'breadcrumb.home': 'Trang chủ',
  'breadcrumb.download': 'Tải xuống',

  // Hero
  'hero.title': 'Tải xuống',
  'hero.subtitle': 'Phần mềm điều khiển máy tính từ xa miễn phí',
  'hero.version': 'Phiên bản',

  // Download section
  'download.heading': 'Tải phần mềm UltraViewer miễn phí',
  'download.version': 'Phiên bản',

  // Download cards
  'card.installer.title': 'Bản cài đặt (EXE)',
  'card.installer.subtitle': 'Khuyên dùng',
  'card.installer.desc': 'Phiên bản cài đặt đầy đủ, tích hợp vào hệ thống, hỗ trợ tự động khởi động cùng Windows.',
  'card.installer.f1': 'Cài đặt đầy đủ vào hệ thống',
  'card.installer.f2': 'Tự động khởi động cùng Windows',
  'card.installer.f3': 'Tích hợp menu context',
  'card.installer.f4': 'Hỗ trợ cập nhật tự động',
  'card.installer.f5': 'Tương thích Windows 7/8/10/11',
  'card.installer.btn': 'Tải xuống',

  'card.portable.title': 'Bản Portable',
  'card.portable.subtitle': 'Không cần cài đặt',
  'card.portable.desc': 'Phiên bản chạy trực tiếp không cần cài đặt, phù hợp mang theo trong USB hoặc sử dụng nhanh.',
  'card.portable.f1': 'Không cần cài đặt',
  'card.portable.f2': 'Chạy trực tiếp từ USB',
  'card.portable.f3': 'Không để lại dấu vết',
  'card.portable.f4': 'Gọn nhẹ, dễ chia sẻ',
  'card.portable.f5': 'Tương thích Windows 7/8/10/11',
  'card.portable.btn': 'Tải xuống',

  'card.docs.title': 'Tài liệu hướng dẫn',
  'card.docs.subtitle': 'PDF chi tiết',
  'card.docs.desc': 'Tài liệu hướng dẫn sử dụng chi tiết bằng tiếng Việt, phù hợp cho người mới bắt đầu.',
  'card.docs.f1': 'Hướng dẫn cài đặt chi tiết',
  'card.docs.f2': 'Cách kết nối 2 máy tính',
  'card.docs.f3': 'Mẹo sử dụng hiệu quả',
  'card.docs.f4': 'Xử lý sự cố thường gặp',
  'card.docs.f5': 'Định dạng PDF tiện lợi',
  'card.docs.btn': 'Xem tài liệu',

  // Social proof
  'social.quote': 'UltraViewer là giải pháp điều khiển máy tính từ xa hàng đầu — hoàn toàn miễn phí, dễ sử dụng và tương thích với mọi phiên bản Windows.',
  'social.free': 'miễn phí',
  'social.highlight1_title': 'Bảo mật cao',
  'social.highlight1_desc': 'Mã hóa đầu cuối AES-256',
  'social.highlight2_title': 'Tốc độ nhanh',
  'social.highlight2_desc': 'Kết nối tức thì, độ trễ thấp',
  'social.highlight3_title': '10M+ người dùng',
  'social.highlight3_desc': 'Được tin dùng toàn cầu',

  // Newsletter
  'newsletter.title': 'Đăng ký nhận tin',
  'newsletter.desc': 'Nhận thông tin cập nhật và khuyến mãi mới nhất',
  'newsletter.placeholder': 'Nhập email của bạn...',
  'newsletter.btn': 'Đăng ký',
  'newsletter.success': 'Đã đăng ký',

  // Footer
  'footer.tagline': 'Kết nối nhanh chóng, bảo mật và hoàn toàn miễn phí.',
  'footer.location': 'Việt Nam',
  'footer.col_about': 'Về UltraViewer',
  'footer.col_products': 'Sản phẩm',
  'footer.col_guide': 'Hướng dẫn',
  'footer.col_contact': 'Liên hệ',
  'footer.link_about': 'Giới thiệu',
  'footer.link_features': 'Tính năng',
  'footer.link_pricing': 'Bảng giá',
  'footer.link_blog': 'Blog',
  'footer.link_free': 'UltraViewer Free',
  'footer.link_pro': 'UltraViewer Pro',
  'footer.link_enterprise': 'UltraViewer Enterprise',
  'footer.link_compare': 'So sánh gói',
  'footer.link_install': 'Hướng dẫn cài đặt',
  'footer.link_usage': 'Hướng dẫn sử dụng',
  'footer.link_faq': 'Câu hỏi thường gặp',
  'footer.link_videos': 'Video hướng dẫn',
  'footer.link_email': 'Email: support@ultraviewer.net',
  'footer.link_hotline': 'Hotline: 1900 1234',
  'footer.link_facebook': 'Facebook',
  'footer.link_forum': 'Diễn đàn',
  'footer.partners': 'Đối tác của chúng tôi',
  'footer.privacy': 'Chính sách bảo mật',
  'footer.terms': 'Điều khoản sử dụng',
  'footer.copyright': 'Tất cả quyền được bảo lưu.',
} as const;

export const en: Record<TranslationKey, string> = {
  // Header / Top bar
  'header.login': 'Sign In',
  'header.menu': 'Menu',
  'header.close_menu': 'Close menu',
  'header.open_menu': 'Open menu',

  // Nav
  'nav.about': 'What is UltraViewer?',
  'nav.download': 'Download',
  'nav.guide': 'Guide',
  'nav.pricing': 'Pricing',
  'nav.blog': 'Blog',

  // Breadcrumb
  'breadcrumb.home': 'Home',
  'breadcrumb.download': 'Download',

  // Hero
  'hero.title': 'Download',
  'hero.subtitle': 'Free remote desktop control software',
  'hero.version': 'Version',

  // Download section
  'download.heading': 'Download UltraViewer for free',
  'download.version': 'Version',

  // Download cards
  'card.installer.title': 'Installer (EXE)',
  'card.installer.subtitle': 'Recommended',
  'card.installer.desc': 'Full installation version, integrated into the system, supports auto-start with Windows.',
  'card.installer.f1': 'Full system installation',
  'card.installer.f2': 'Auto-start with Windows',
  'card.installer.f3': 'Context menu integration',
  'card.installer.f4': 'Automatic updates',
  'card.installer.f5': 'Windows 7/8/10/11 compatible',
  'card.installer.btn': 'Download',

  'card.portable.title': 'Portable Version',
  'card.portable.subtitle': 'No installation',
  'card.portable.desc': 'Direct-run portable version, suitable for USB drives or quick use.',
  'card.portable.f1': 'No installation required',
  'card.portable.f2': 'Run directly from USB',
  'card.portable.f3': 'No traces left behind',
  'card.portable.f4': 'Lightweight, easy to share',
  'card.portable.f5': 'Windows 7/8/10/11 compatible',
  'card.portable.btn': 'Download',

  'card.docs.title': 'User Guide',
  'card.docs.subtitle': 'Detailed PDF',
  'card.docs.desc': 'Comprehensive user guide in English, perfect for beginners getting started.',
  'card.docs.f1': 'Detailed installation guide',
  'card.docs.f2': 'How to connect 2 computers',
  'card.docs.f3': 'Tips for effective use',
  'card.docs.f4': 'Common troubleshooting',
  'card.docs.f5': 'Convenient PDF format',
  'card.docs.btn': 'View Guide',

  // Social proof
  'social.quote': 'UltraViewer is the leading remote desktop solution — completely free, easy to use and compatible with all Windows versions.',
  'social.free': 'free',
  'social.highlight1_title': 'High Security',
  'social.highlight1_desc': 'AES-256 end-to-end encryption',
  'social.highlight2_title': 'Fast Speed',
  'social.highlight2_desc': 'Instant connection, low latency',
  'social.highlight3_title': '10M+ Users',
  'social.highlight3_desc': 'Trusted worldwide',

  // Newsletter
  'newsletter.title': 'Subscribe to newsletter',
  'newsletter.desc': 'Get the latest updates and promotions',
  'newsletter.placeholder': 'Enter your email...',
  'newsletter.btn': 'Subscribe',
  'newsletter.success': 'Subscribed',

  // Footer
  'footer.tagline': 'Fast, secure connection — completely free.',
  'footer.location': 'Vietnam',
  'footer.col_about': 'About UltraViewer',
  'footer.col_products': 'Products',
  'footer.col_guide': 'Guide',
  'footer.col_contact': 'Contact',
  'footer.link_about': 'About Us',
  'footer.link_features': 'Features',
  'footer.link_pricing': 'Pricing',
  'footer.link_blog': 'Blog',
  'footer.link_free': 'UltraViewer Free',
  'footer.link_pro': 'UltraViewer Pro',
  'footer.link_enterprise': 'UltraViewer Enterprise',
  'footer.link_compare': 'Compare Plans',
  'footer.link_install': 'Installation Guide',
  'footer.link_usage': 'User Guide',
  'footer.link_faq': 'FAQ',
  'footer.link_videos': 'Video Tutorials',
  'footer.link_email': 'Email: support@ultraviewer.net',
  'footer.link_hotline': 'Hotline: 1900 1234',
  'footer.link_facebook': 'Facebook',
  'footer.link_forum': 'Forum',
  'footer.partners': 'Our Partners',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  'footer.copyright': 'All rights reserved.',
} as const;

export const translations = { vi, en };
