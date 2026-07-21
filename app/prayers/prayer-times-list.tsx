'use client';

import { Clock } from 'lucide-react';
import { usePrayerTimes } from '@/hooks/use-prayer-times';

export function PrayerTimesList() {
  const { prayerTimes } = usePrayerTimes();

  if (prayerTimes.length === 0) return null;

  return (
    <section className="bg-paper px-8 py-14 text-center">
      <div className="max-w-[700px] mx-auto flex flex-col gap-8">
        {prayerTimes.map((meeting, i) => (
          <div key={meeting._id ?? i}>
            <h3 className="font-display text-xl mb-1.5">{meeting.title}</h3>
            <div className="flex justify-center items-center gap-2 text-ink-soft text-sm mb-2">
              <Clock size={16} />
              {meeting.start_time} – {meeting.end_time}
            </div>
            {meeting.description && <p className="text-[15px] text-ink-soft max-w-[520px] mx-auto">{meeting.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
