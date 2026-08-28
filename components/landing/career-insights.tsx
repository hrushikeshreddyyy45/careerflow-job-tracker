'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Lightbulb, CheckCircle2 } from 'lucide-react';

const insights = [
  {
    icon: TrendingUp,
    title: 'Response rate tracking',
    description:
      'See which companies respond, how long they take, and which application channels work best for you.',
    color: 'from-primary to-secondary',
  },
  {
    icon: Calendar,
    title: 'Optimal timing',
    description:
      'Discover the best days and times to apply based on your personal response data.',
    color: 'from-secondary to-cyan-500',
  },
  {
    icon: Lightbulb,
    title: 'Smart suggestions',
    description:
      'Get personalized recommendations on where to focus your energy next.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: CheckCircle2,
    title: 'Conversion metrics',
    description:
      'Track your funnel from application to offer. Know your conversion rate at every stage.',
    color: 'from-success to-emerald-600',
  },
];

export function CareerInsights() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Career insights that actually help
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              CareerFlow doesn't just store your data — it analyzes it. Get actionable insights that help you search smarter, not harder.
            </motion.p>

            <div className="mt-8 space-y-6">
              {insights.map((insight, i) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${insight.color} text-white shadow-sm`}>
                    <insight.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{insight.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {insight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-float">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold">Weekly Insights</h3>
                <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                  Updated
                </span>
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: 'Response rate is above average',
                    desc: '34% vs 22% industry average',
                    badge: '+12%',
                    badgeColor: 'text-success bg-success/10',
                  },
                  {
                    title: 'Best day to apply: Tuesday',
                    desc: '45% response rate on Tuesdays',
                    badge: 'Tip',
                    badgeColor: 'text-secondary bg-secondary/10',
                  },
                  {
                    title: 'Interview conversion is strong',
                    desc: '62% screening → technical',
                    badge: 'Great',
                    badgeColor: 'text-primary bg-primary/10',
                  },
                  {
                    title: 'Consider more startups',
                    desc: '52% response vs 28% enterprise',
                    badge: 'Idea',
                    badgeColor: 'text-amber-500 bg-amber-500/10',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-lg border border-border bg-background p-3"
                  >
                    <div className="flex-1">
                      <div className="text-sm font-medium">{item.title}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
