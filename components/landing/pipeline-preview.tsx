'use client';

import { motion } from 'framer-motion';
import { STATUS_META, KANBAN_COLUMNS } from '@/lib/types';
import { applications } from '@/lib/demo-data';

export function PipelinePreview() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Your application pipeline, visualized
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Drag and drop applications across every stage. Always know what needs attention.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 overflow-x-auto scrollbar-thin"
        >
          <div className="flex gap-3 pb-4" style={{ minWidth: '900px' }}>
            {KANBAN_COLUMNS.slice(0, 6).map((status) => {
              const meta = STATUS_META[status];
              const apps = applications.filter((a) => a.status === status);
              return (
                <div
                  key={status}
                  className="flex w-56 flex-col rounded-xl border border-border bg-muted/30"
                >
                  <div className="flex items-center justify-between border-b border-border p-3">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
                      <span className="text-sm font-medium">{meta.label}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {apps.length}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 p-2">
                    {apps.slice(0, 3).map((app) => (
                      <div
                        key={app.id}
                        className="rounded-lg border border-border bg-card p-3 shadow-sm"
                      >
                        <div className="mb-1 truncate text-sm font-medium">
                          {app.jobTitle}
                        </div>
                        <div className="mb-2 truncate text-xs text-muted-foreground">
                          {app.company}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`rounded-full px-2 py-0.5 text-xs ${meta.bg} ${meta.color}`}>
                            {meta.label}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {app.location.split(',')[0]}
                          </span>
                        </div>
                      </div>
                    ))}
                    {apps.length === 0 && (
                      <div className="rounded-lg border border-dashed border-border p-3 text-center text-xs text-muted-foreground">
                        No applications
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
