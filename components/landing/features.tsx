'use client';

import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  KanbanSquare,
  CalendarCheck,
  BarChart3,
  FileText,
  Bell,
  Zap,
  Shield,
} from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Unified Dashboard',
    description:
      'Every application, interview, and task in one beautiful, organized view. See your entire job search at a glance.',
    color: 'text-primary bg-primary/10',
  },
  {
    icon: KanbanSquare,
    title: 'Kanban Pipeline',
    description:
      'Drag and drop applications across stages. Visualize your pipeline from wishlist to offer in real-time.',
    color: 'text-secondary bg-secondary/10',
  },
  {
    icon: CalendarCheck,
    title: 'Interview Scheduling',
    description:
      'Never miss an interview. Track scheduled calls, prep notes, and follow-ups all in one place.',
    color: 'text-violet-500 bg-violet-500/10',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description:
      'Understand your response rates, track momentum, and get AI-powered insights to improve your search.',
    color: 'text-success bg-success/10',
  },
  {
    icon: FileText,
    title: 'Resume Management',
    description:
      'Store multiple resume versions, tailor them per application, and track which one you sent where.',
    color: 'text-amber-500 bg-amber-500/10',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description:
      'Get notified about follow-ups, interviews, and deadlines. Never let an application go cold again.',
    color: 'text-rose-500 bg-rose-500/10',
  },
  {
    icon: Zap,
    title: 'Quick Add',
    description:
      'Add applications in seconds with smart auto-fill. Paste a job URL and let CareerFlow do the rest.',
    color: 'text-cyan-500 bg-cyan-500/10',
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    description:
      'Your job search data is yours alone. Encrypted, private, and never shared with employers or third parties.',
    color: 'text-indigo-500 bg-indigo-500/10',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Everything you need to land your next role
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Powerful features designed to make your job search efficient, organized, and stress-free.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-float hover:border-primary/30"
            >
              <div
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg ${feature.color}`}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
