export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface DownloadCardData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  buttonLabel: string;
  buttonVariant: 'primary' | 'secondary' | 'outline';
  icon: string;
  fileSize?: string;
  version?: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface Partner {
  name: string;
  logo: string;
  href: string;
}
