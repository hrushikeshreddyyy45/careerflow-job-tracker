export type ApplicationStatus =
  | 'wishlist'
  | 'applied'
  | 'screening'
  | 'interview'
  | 'offer'
  | 'accepted'
  | 'rejected'
  | 'withdrawn';

export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export type WorkMode = 'remote' | 'hybrid' | 'onsite';

export type EmploymentType =
  | 'full-time'
  | 'part-time'
  | 'contract'
  | 'internship'
  | 'freelance';

export interface Application {
  id: string;
  jobTitle: string;
  company: string;
  companyLogo?: string;
  jobUrl?: string;
  location: string;
  workMode: WorkMode;
  employmentType: EmploymentType;
  salary?: string;
  dateApplied: string;
  status: ApplicationStatus;
  priority: Priority;
  recruiter?: string;
  notes?: string;
  nextAction?: string;
  nextActionDate?: string;
}

export interface Interview {
  id: string;
  applicationId: string;
  company: string;
  jobTitle: string;
  type: 'phone' | 'video' | 'onsite' | 'technical' | 'final';
  scheduledAt: string;
  duration: number;
  interviewer: string;
  notes?: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  priority: Priority;
  completed: boolean;
  applicationId?: string;
  category: 'follow-up' | 'preparation' | 'document' | 'networking' | 'other';
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  size: string;
  website?: string;
  location: string;
  openPositions: number;
  applicationsCount: number;
}

export interface Resume {
  id: string;
  name: string;
  lastModified: string;
  fileSize: string;
  isDefault: boolean;
}

export interface TimelineEvent {
  id: string;
  applicationId: string;
  type: 'applied' | 'status_change' | 'interview' | 'note' | 'email' | 'offer';
  title: string;
  description?: string;
  date: string;
}

export interface KPIData {
  totalApplications: number;
  activeApplications: number;
  interviews: number;
  offers: number;
  responseRate: number;
  applicationsThisWeek: number;
}

export const STATUS_META: Record<
  ApplicationStatus,
  { label: string; color: string; bg: string; dot: string }
> = {
  wishlist: {
    label: 'Wishlist',
    color: 'text-slate-600 dark:text-slate-400',
    bg: 'bg-slate-100 dark:bg-slate-800',
    dot: 'bg-slate-400',
  },
  applied: {
    label: 'Applied',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950',
    dot: 'bg-blue-500',
  },
  screening: {
    label: 'Screening',
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-50 dark:bg-cyan-950',
    dot: 'bg-cyan-500',
  },
  interview: {
    label: 'Interview',
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-950',
    dot: 'bg-violet-500',
  },
  offer: {
    label: 'Offer',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950',
    dot: 'bg-amber-500',
  },
  accepted: {
    label: 'Accepted',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950',
    dot: 'bg-emerald-500',
  },
  rejected: {
    label: 'Rejected',
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-950',
    dot: 'bg-rose-500',
  },
  withdrawn: {
    label: 'Withdrawn',
    color: 'text-zinc-600 dark:text-zinc-400',
    bg: 'bg-zinc-100 dark:bg-zinc-800',
    dot: 'bg-zinc-500',
  },
};

export const PRIORITY_META: Record<
  Priority,
  { label: string; color: string; bg: string; icon: string }
> = {
  low: {
    label: 'Low',
    color: 'text-slate-600 dark:text-slate-400',
    bg: 'bg-slate-100 dark:bg-slate-800',
    icon: '▽',
  },
  medium: {
    label: 'Medium',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950',
    icon: '◁',
  },
  high: {
    label: 'High',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950',
    icon: '△',
  },
  urgent: {
    label: 'Urgent',
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-950',
    icon: '◆',
  },
};

export const KANBAN_COLUMNS: ApplicationStatus[] = [
  'wishlist',
  'applied',
  'screening',
  'interview',
  'offer',
  'accepted',
  'rejected',
  'withdrawn',
];
