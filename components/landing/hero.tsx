'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-[0.15] dark:opacity-[0.08]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/15" />
      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground"
          >
            <span className="flex h-2 w-2 rounded-full bg-success animate-pulse-glow" />
            Now in beta — free for early users
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your entire job search,{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              organized.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
          >
            Track applications, manage interviews, analyze your progress, and stay on top of every opportunity — all from one intelligent workspace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/dashboard">
              <Button size="lg" className="group w-full sm:w-auto">
                Start Tracking Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="group w-full sm:w-auto">
                <Play className="mr-2 h-4 w-4" />
                View Demo
              </Button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-sm text-muted-foreground"
          >
            No credit card required. Free during beta.
          </motion.p>
        </div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl" />
          <div className="relative rounded-xl border border-border bg-card shadow-float overflow-hidden">
            <DashboardPreview />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="flex flex-col">
      {/* Browser bar */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-rose-400" />
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-success" />
          app.careerflow.io/dashboard
        </div>
      </div>

      {/* Dashboard content */}
      <div className="grid grid-cols-12 gap-0">
        {/* Sidebar */}
        <div className="col-span-2 hidden border-r border-border bg-muted/30 p-3 md:block">
          <div className="space-y-1">
            {['Dashboard', 'Applications', 'Interviews', 'Analytics', 'Tasks'].map(
              (item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${
                    i === 0
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground'
                  }`}
                >
                  <div className="h-3 w-3 rounded-sm bg-current opacity-60" />
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* Main content */}
        <div className="col-span-12 md:col-span-10 p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-4 w-40 rounded bg-foreground/20" />
              <div className="mt-2 h-3 w-24 rounded bg-muted-foreground/20" />
            </div>
            <div className="h-8 w-32 rounded-md bg-primary" />
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { label: 'Total Apps', value: '47', color: 'text-primary' },
              { label: 'Active', value: '23', color: 'text-secondary' },
              { label: 'Interviews', value: '8', color: 'text-violet-500' },
              { label: 'Offers', value: '2', color: 'text-success' },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-lg border border-border bg-background p-3"
              >
                <div className="text-xs text-muted-foreground">{kpi.label}</div>
                <div className={`mt-1 text-2xl font-bold ${kpi.color}`}>
                  {kpi.value}
                </div>
              </div>
            ))}
          </div>

          {/* Chart preview */}
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <div className="h-3 w-20 rounded bg-foreground/20" />
              </div>
              <div className="flex h-24 items-end gap-1.5">
                {[40, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.05 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-primary"
                  />
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="mb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-secondary" />
                <div className="h-3 w-20 rounded bg-foreground/20" />
              </div>
              <div className="space-y-2">
                {[
                  { company: 'Vercel', time: '10:00 AM', color: 'bg-violet-500' },
                  { company: 'Linear', time: '3:00 PM', color: 'bg-blue-500' },
                  { company: 'Retool', time: '9:00 AM', color: 'bg-emerald-500' },
                ].map((item) => (
                  <div
                    key={item.company}
                    className="flex items-center gap-2 rounded-md bg-muted/40 p-2"
                  >
                    <div className={`h-2 w-2 rounded-full ${item.color}`} />
                    <div className="h-2 flex-1 rounded bg-foreground/15" />
                    <div className="h-2 w-12 rounded bg-muted-foreground/20" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent activity */}
          <div className="rounded-lg border border-border bg-background p-3">
            <div className="mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <div className="h-3 w-24 rounded bg-foreground/20" />
            </div>
            <div className="space-y-2">
              {['Vercel — Senior Frontend Engineer', 'Stripe — Frontend Architect', 'Notion — Product Engineer'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-md bg-primary/10" />
                    <div className="h-2 flex-1 rounded bg-foreground/10" />
                    <div className="h-5 w-16 rounded-full bg-muted" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
