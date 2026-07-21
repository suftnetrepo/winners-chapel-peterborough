'use client';

import { Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRegularServices } from '@/hooks/use-regular-services';

export function ServiceTimesList() {
  const { services } = useRegularServices();

  return (
    <div className="max-w-[640px] mx-auto flex flex-col gap-12">
      {services.length === 0 && <p className="text-ink-soft">Service times are being updated — please check back shortly.</p>}
      {services.map((service, i) => (
        <div key={service._id ?? i}>
          <h3 className="font-display text-2xl mb-2">{service.title}</h3>
          <div className="flex justify-center items-center gap-2 text-ink-soft text-sm mb-1.5">
            <Clock size={16} />
            {service.start_time} – {service.end_time}
          </div>
          {!service.remote && (
            <div className="flex justify-center items-center gap-2 text-ink-soft text-sm mb-3">
              <MapPin size={16} />
              Ormiston Bushfield Academy, Peterborough PE2 5RQ
            </div>
          )}
          {service.description && <p className="text-[15px] text-ink-soft max-w-[480px] mx-auto mb-4">{service.description}</p>}
          {service.remote && service.remote_link && <Button href={service.remote_link}>Join online</Button>}
        </div>
      ))}
    </div>
  );
}
