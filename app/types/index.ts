/**
 * Shared TypeScript interfaces for the application.
 */

export interface NavLink {
  id: string;
  label: string;
}

export interface Service {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  shortBio: string;
  fullBio: string;
  specialties: string[];
  education: string;
}

export interface TrustItem {
  title: string;
  description: string;
  iconName: IconName;
}

export interface FooterContactItem {
  label: string;
  iconName: IconName;
}

/** Union of all available icon names in the Icons component */
export type IconName =
  | 'phone'
  | 'email'
  | 'shield'
  | 'lock'
  | 'calendar'
  | 'arrow-right'
  | 'chevron-up'
  | 'chevron-down'
  | 'whatsapp'
  | 'video'
  | 'close'
  | 'star'
  | 'warning'
  | 'clock'
  | 'moon'
  | 'globe'
  | 'clipboard'
  | 'map'
  | 'heart'
  | 'chat'
  | 'archive';
