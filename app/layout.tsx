import type { Metadata } from 'next';
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { AnnouncementBar } from '@/components/layout/announcement-bar';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SwrProvider } from '@/components/providers/swr-provider';
import { getChurchSettings, getRegularServices } from '@/lib/server-data';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  weight: ['500']
});

export const metadata: Metadata = {
  title: {
    default: 'Winners Chapel International Peterborough',
    template: '%s — Winners Chapel International Peterborough'
  },
  description: 'A Bible-believing family in the heart of Peterborough. Join us for worship, teaching, and real community.'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Seeds a site-wide SWR fallback so the Footer (and anything else outside a
  // page's own SwrProvider) can use useSettings()/useRegularServices() too,
  // without every layout-level component re-fetching on its own.
  const [settings, services] = await Promise.all([getChurchSettings(), getRegularServices()]);
  const fallback: Record<string, unknown> = {};
  if (settings) fallback['/api/settings'] = settings;
  if (services) fallback['/api/regular-services'] = services;

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <SwrProvider fallback={fallback}>
          <AnnouncementBar />
          <Navbar />
          {children}
          <Footer />
        </SwrProvider>
      </body>
    </html>
  );
}
