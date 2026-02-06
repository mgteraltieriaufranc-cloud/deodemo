
export enum UrgencyLevel {
  LOW = 'BAJA',
  MEDIUM = 'MEDIA',
  HIGH = 'ALTA'
}

export interface TriageFormData {
  fullName: string;
  dni?: string;
  reason: string;
  urgency: UrgencyLevel;
  additionalNotes?: string;
}

export interface NotificationStatus {
  emailSent: boolean;
  whatsappSent: boolean;
  timestamp: string;
}
