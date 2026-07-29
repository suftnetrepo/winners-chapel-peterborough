import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import { SwrProvider } from '@/components/providers/swr-provider';
import { ServiceTimesList } from './service-times-list';
import { getRegularServices } from '@/lib/server-data';

export const metadata: Metadata = {
  title: 'Service Times',
  description: "Come and be refreshed in God's presence during our uplifting service times."
};

export const revalidate = 300;

export default async function ServiceTimesPage() {
  const services = await getRegularServices();
  const fallback: Record<string, unknown> = {};
  if (services) fallback['/api/regular-services'] = services;

  return (
    <main>
      <PageHeader
        eyebrow="Service times"
        title="Worship with us"
        description="Come and be refreshed in God's presence during our uplifting service times."
      />
      <section className="px-8 py-16">
        <SwrProvider fallback={fallback}>
          <ServiceTimesList />
        </SwrProvider>
      </section>
    </main>
  );
}
