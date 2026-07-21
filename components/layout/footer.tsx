'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useSettings } from '@/hooks/use-settings';
import { useRegularServices } from '@/hooks/use-regular-services';

export function Footer() {
  const { settings } = useSettings();
  const { services } = useRegularServices();

  const address = settings?.address;
  const addressLines = address
    ? [address.addressLine1, [address.town, address.postcode].filter(Boolean).join(', ')].filter(Boolean)
    : ['Ormiston Bushfield Academy', 'Peterborough, PE2 5RQ'];

  const socials = [
    { Icon: Facebook, label: 'Facebook', href: settings?.facebook_url },
    { Icon: Instagram, label: 'Instagram', href: settings?.instagram_url },
    { Icon: Youtube, label: 'YouTube', href: settings?.youtube_url }
  ];

  return (
    <footer className="bg-indigo-deep text-[#B7BBD1] pt-[70px] px-8 pb-7">
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-[50px] pb-[50px] border-b border-white/[0.08]">
        <div className="md:col-span-1">
          <Image src="/logo.png" alt="Winners Chapel International" width={42} height={31} className="object-contain mb-3" />
          <div className="font-display text-lg text-white mb-3.5">
            Winners Chapel
            <br />
            International
          </div>
          <p className="text-[13.5px] leading-7 max-w-[280px]">
            A Bible-believing family in the heart of Peterborough, committed to worship, community, and living victorious.
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href || '#'}
                target={href ? '_blank' : undefined}
                rel={href ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="w-[34px] h-[34px] border border-white/15 rounded-full flex items-center justify-center"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#7B8199] mb-[18px] font-medium">Quick links</h4>
          <ul className="space-y-[11px] text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-white">
                Events
              </Link>
            </li>
            <li>
              <Link href="/give" className="hover:text-white">
                Give
              </Link>
            </li>
            <li>
              <Link href="/free-transport" className="hover:text-white">
                Free transport
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#7B8199] mb-[18px] font-medium">Service times</h4>
          <ul className="space-y-[11px] text-sm">
            {services.length > 0 ? (
              services.map((service, i) => (
                <li key={service._id ?? i}>
                  {service.title} · {service.start_time}
                </li>
              ))
            ) : (
              <>
                <li>Sunday · 09:00 &amp; 11:00</li>
                <li>Wednesday · 19:00</li>
                <li>Friday prayer · 19:00</li>
              </>
            )}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#7B8199] mb-[18px] font-medium">Contact</h4>
          <ul className="space-y-[11px] text-sm">
            <li>
              {addressLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < addressLines.length - 1 && <br />}
                </span>
              ))}
            </li>
            {settings?.mobile && <li>{settings.mobile}</li>}
            <li>{settings?.email || 'WinnersChapel.InternationalPeterborough@winners-chapel.org.uk'}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto flex flex-col sm:flex-row gap-3 justify-between items-center pt-[26px] text-[12.5px] text-[#6A6F87]">
        <span>© {new Date().getFullYear()} Winners Chapel International Peterborough</span>
        <span className="flex gap-5">
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  );
}
