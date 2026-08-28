'use client';

import * as React from 'react';
import { AppProvider } from '@/lib/app-context';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}
