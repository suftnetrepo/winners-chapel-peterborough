import type { Metadata } from 'next';
import { Hero } from '@/components/home/hero';
import { QuickAccess } from '@/components/home/quick-access';
import { Welcome } from '@/components/home/welcome';
import { GetInvolved } from '@/components/home/get-involved';
import { TestimonyBand } from '@/components/home/testimony-band';
import { SwrProvider } from '@/components/providers/swr-provider';
import { getChurchSettings, getRegularServices } from '@/lib/server-data';

export const metadata: Metadata = {
  title: 'Home',
  description: 'A Bible-believing family in the heart of Peterborough. Join us this Sunday for worship, teaching, and real community.'
};

export const revalidate = 300; // re-fetch church data every 5 minutes

export default async function Home() {
  const [settings, services] = await Promise.all([getChurchSettings(), getRegularServices()]);

  const fallback: Record<string, unknown> = {};
  if (settings) fallback['/api/settings'] = settings;
  if (services) fallback['/api/regular-services'] = services;

  return (
    <SwrProvider fallback={fallback}>
      <main>
        <Hero />
        <QuickAccess />
        <Welcome />
        <GetInvolved />
        <TestimonyBand />
      </main>
    </SwrProvider>
  );
}
