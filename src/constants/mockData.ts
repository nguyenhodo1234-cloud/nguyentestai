import type { NavItem, Language, DownloadCardData, FooterColumn, Partner, SocialLink } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'UltraViewer là gì?', href: '/about' },
  { label: 'Tải xuống', href: '/download', active: true },
  { label: 'Hướng dẫn', href: '/guide' },
  { label: 'Bảng giá', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

export const LANGUAGES: Language[] = [
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Facebook', href: 'https://facebook.com/ultraviewer', icon: 'facebook' },
  { platform: 'YouTube', href: 'https://youtube.com/ultraviewer', icon: 'youtube' },
  { platform: 'Twitter', href: 'https://twitter.com/ultraviewer', icon: 'twitter' },
];

export const DOWNLOAD_CARDS: DownloadCardData[] = [
  {
    id: 'installer',
    title: 'Bản cài đặt (EXE)',
    subtitle: 'Khuyên dùng',
    description: 'Phiên bản cài đặt đầy đủ, tích hợp vào hệ thống, hỗ trợ tự động khởi động cùng Windows.',
    features: [
      'Cài đặt đầy đủ vào hệ thống',
      'Tự động khởi động cùng Windows',
      'Tích hợp menu context',
      'Hỗ trợ cập nhật tự động',
      'Tương thích Windows 7/8/10/11',
    ],
    buttonLabel: 'Tải xuống',
    buttonVariant: 'primary',
    icon: 'download',
    fileSize: '~15 MB',
    version: '6.6.124',
    href: '/download/exe',
  },
  {
    id: 'portable',
    title: 'Bản Portable',
    subtitle: 'Không cần cài đặt',
    description: 'Phiên bản chạy trực tiếp không cần cài đặt, phù hợp mang theo trong USB hoặc sử dụng nhanh.',
    features: [
      'Không cần cài đặt',
      'Chạy trực tiếp từ USB',
      'Không để lại dấu vết',
      'Gọn nhẹ, dễ chia sẻ',
      'Tương thích Windows 7/8/10/11',
    ],
    buttonLabel: 'Tải xuống',
    buttonVariant: 'secondary',
    icon: 'usb',
    fileSize: '~10 MB',
    version: '6.6.124',
    href: '/download/portable',
  },
  {
    id: 'docs',
    title: 'Tài liệu hướng dẫn',
    subtitle: 'PDF chi tiết',
    description: 'Tài liệu hướng dẫn sử dụng chi tiết bằng tiếng Việt, phù hợp cho người mới bắt đầu.',
    features: [
      'Hướng dẫn cài đặt chi tiết',
      'Cách kết nối 2 máy tính',
      'Mẹo sử dụng hiệu quả',
      'Xử lý sự cố thường gặp',
      'Định dạng PDF tiện lợi',
    ],
    buttonLabel: 'Xem tài liệu',
    buttonVariant: 'outline',
    icon: 'file-text',
    fileSize: '~5 MB',
    version: '6.6.124',
    href: '/docs',
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Về UltraViewer',
    links: [
      { label: 'Giới thiệu', href: '/about' },
      { label: 'Tính năng', href: '/features' },
      { label: 'Bảng giá', href: '/pricing' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Sản phẩm',
    links: [
      { label: 'UltraViewer Free', href: '/free' },
      { label: 'UltraViewer Pro', href: '/pro' },
      { label: 'UltraViewer Enterprise', href: '/enterprise' },
      { label: 'So sánh gói', href: '/compare' },
    ],
  },
  {
    title: 'Hướng dẫn',
    links: [
      { label: 'Hướng dẫn cài đặt', href: '/guide/install' },
      { label: 'Hướng dẫn sử dụng', href: '/guide/usage' },
      { label: 'Câu hỏi thường gặp', href: '/faq' },
      { label: 'Video hướng dẫn', href: '/videos' },
    ],
  },
  {
    title: 'Liên hệ',
    links: [
      { label: 'Email: support@ultraviewer.net', href: 'mailto:support@ultraviewer.net' },
      { label: 'Hotline: 1900 1234', href: 'tel:19001234' },
      { label: 'Facebook', href: 'https://facebook.com/ultraviewer' },
      { label: 'Diễn đàn', href: '/forum' },
    ],
  },
];

export const PARTNERS: Partner[] = [
  { name: 'Partner 1', logo: '/partners/partner1.png', href: '#' },
  { name: 'Partner 2', logo: '/partners/partner2.png', href: '#' },
  { name: 'Partner 3', logo: '/partners/partner3.png', href: '#' },
  { name: 'Partner 4', logo: '/partners/partner4.png', href: '#' },
  { name: 'Partner 5', logo: '/partners/partner5.png', href: '#' },
  { name: 'Partner 6', logo: '/partners/partner6.png', href: '#' },
];

export const SITE_CONFIG = {
  name: 'UltraViewer',
  tagline: 'Phần mềm điều khiển máy tính từ xa miễn phí',
  version: '6.6.124',
  copyright: `© ${new Date().getFullYear()} UltraViewer. Tất cả quyền được bảo lưu.`,
};
