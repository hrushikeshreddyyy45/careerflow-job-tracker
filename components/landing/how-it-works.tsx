'use client';

import { motion } from 'framer-motion';
import { MousePointerClick, LayoutGrid, LineChart } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    step: '01',
    title: 'Add your applications',
    description:
      'Paste a job link or manually enter details. CareerFlow auto-organizes everything — company, role, status, and priority.',
  },
  {
    icon: LayoutGrid,
    step: '02',
    title: 'Track through your pipeline',
    description:
      'Move applications across stages with drag-and-drop. From wishlist to offer, see exactly where every opportunity stands.',
  },
  {
    icon: LineChart,
    step: '03',
    title: 'Analyze and improve',
    description:
      'Get insights on response rates, best application times, and conversion funnels. Optimize your search with data.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Three simple steps to transform your job search from chaotic to controlled.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="absolute top-12 left-full hidden h-px w-full bg-gradient-to-r from-border to-transparent md:block -translate-x-8" />
              )}
              <div className="relative rounded-xl border border-border bg-card p-8 shadow-card">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-glow">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/20">
                    {step.step}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
