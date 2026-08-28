import { LandingNavbar } from '@/components/landing/navbar';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { HowItWorks } from '@/components/landing/how-it-works';
import { PipelinePreview } from '@/components/landing/pipeline-preview';
import { AnalyticsPreview } from '@/components/landing/analytics-preview';
import { CareerInsights } from '@/components/landing/career-insights';
import { FAQ } from '@/components/landing/faq';
import { CTA } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <LandingNavbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PipelinePreview />
        <AnalyticsPreview />
        <CareerInsights />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
