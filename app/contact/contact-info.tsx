'use client';

import { MapPin, Phone, Mail } from 'lucide-react';
import { useSettings } from '@/hooks/use-settings';

export function ContactInfo() {
  const { settings } = useSettings();
  const address = settings?.address;

  return (
    <div>
      <h2 className="text-2xl mb-8">Visit or reach us</h2>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <MapPin className="text-gold-deep shrink-0 mt-0.5" size={22} />
          <div>
            <h5 className="font-semibold text-sm mb-1">Address</h5>
            <address className="not-italic text-[14.5px] text-ink-soft">
              {address?.addressLine1 || 'Ormiston Bushfield Academy'}
              <br />
              {address ? [address.town, address.postcode].filter(Boolean).join(', ') : 'Peterborough, PE2 5RQ'}
            </address>
          </div>
        </div>
        <div className="flex gap-4">
          <Phone className="text-gold-deep shrink-0 mt-0.5" size={22} />
          <div>
            <h5 className="font-semibold text-sm mb-1">Phone</h5>
            <p className="text-[14.5px] text-ink-soft">{settings?.mobile || '07888 230 650 / 07776 696 504'}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Mail className="text-gold-deep shrink-0 mt-0.5" size={22} />
          <div>
            <h5 className="font-semibold text-sm mb-1">Email</h5>
            <a
              href={`mailto:${settings?.email || 'WinnersChapel.InternationalPeterborough@winners-chapel.org.uk'}`}
              className="text-[14.5px] text-ink-soft hover:text-ink"
            >
              {settings?.email || 'WinnersChapel.InternationalPeterborough@winners-chapel.org.uk'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
