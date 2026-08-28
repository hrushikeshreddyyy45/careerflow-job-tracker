'use client';

import * as React from 'react';
import { Application } from '@/lib/types';
import { applications as initialApplications } from '@/lib/demo-data';

interface AppContextValue {
  applications: Application[];
  addApplication: (app: Omit<Application, 'id'>) => void;
  updateApplication: (id: string, updates: Partial<Application>) => void;
  deleteApplication: (id: string) => void;
  getApplication: (id: string) => Application | undefined;
}

const AppContext = React.createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [apps, setApps] = React.useState<Application[]>(initialApplications);

  const addApplication = React.useCallback((app: Omit<Application, 'id'>) => {
    const newApp: Application = {
      ...app,
      id: `app-${Date.now()}`,
    };
    setApps((prev) => [newApp, ...prev]);
  }, []);

  const updateApplication = React.useCallback((id: string, updates: Partial<Application>) => {
    setApps((prev) => prev.map((a) => (a.id === id ? { ...a, ...updates } : a)));
  }, []);

  const deleteApplication = React.useCallback((id: string) => {
    setApps((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const getApplication = React.useCallback(
    (id: string) => apps.find((a) => a.id === id),
    [apps]
  );

  return (
    <AppContext.Provider
      value={{ applications: apps, addApplication, updateApplication, deleteApplication, getApplication }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = React.useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
