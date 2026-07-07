/**
 * Shared Type Definitions for Hyungje Industrial Engineering (형제산업기공)
 */

export interface Capability {
  id: string;
  title: string;
  engTitle: string;
  description: string;
  imageUrl: string;
  details: string[];
  specs?: { label: string; value: string }[];
}

export interface Equipment {
  id: string;
  name: string;
  category: 'press' | 'die' | 'measurement' | 'auxiliary';
  specification: string;
  quantity: number;
  manufacturer?: string;
  tonnage?: number;
  features: string[];
}

export interface InquiryFormData {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  inquiryType: 'die' | 'press' | 'post-process' | 'sample' | 'other';
  message: string;
  consent: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
