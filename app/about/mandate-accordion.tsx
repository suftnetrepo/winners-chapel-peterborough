// app/about/mandate-accordion.tsx
"use client";

import { useState, type ReactNode } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

const ITEMS: AccordionItem[] = [
  {
    id: "mandate",
    title: "Mandate",
    content: (
      <>
        <p>
          Our Mandate for ministry was received from God in an 18-hour vision
          to the presiding Bishop of this commission, Bishop David O
          Oyedepo. During this vision, a commission was received from God to
          liberate mankind in all facets of human existence, to restore
          broken destinies, to bring healing to the infirmed.
        </p>
        <p>This was the Divine mandate received from God:</p>
        <blockquote className="border-l-2 border-gold-deep pl-4 italic text-ink my-5">
          &ldquo;Now the hour has come to liberate the world from all
          oppressions of the devil through the preaching of the word of
          faith, and I am sending you to undertake this task.&rdquo;
        </blockquote>
        <p>
          This mandate was further confirmed from the epistle of Paul to the
          Ephesians where God said:
        </p>
        <blockquote className="border-l-2 border-gold-deep pl-4 italic text-ink my-5">
          &ldquo;Above all, taking the shield of faith, wherewith ye shall be
          able to quench all the fiery darts of the wicked&rdquo;
          <span className="block not-italic text-[13px] text-ink-soft mt-1">
            — Ephesians 6:16
          </span>
        </blockquote>
        <p>
          This was the genesis of this global ministry today, and according
          to this mandate, the Word of Faith is the key to triumphant
          living.
        </p>
        <p>
          Shortly thereafter, a weekly teaching programme took off, popularly
          known as the Faith Liberation Hour. Alongside, a caucus was put in
          place, tagged The Power House, which was involved in prayers and
          fasting, among others, towards the actualization of this heavenly
          vision.
        </p>
        <p>
          Today, testimonies of liberation through our messages, books, CDs,
          DVDs, magazines, and other periodicals are most humbling. The Word
          of Faith is working like fire for the liberation of mankind across
          the nations.
        </p>
      </>
    ),
  },
  {
    id: "mission",
    title: "Mission",
    content: (
      <>
        <p>
          David Oyedepo received a mandate from God in an 18-hour long
          vision in May 1981 to liberate the world from all oppressions of
          the devil through the preaching of the word of faith. This is the
          inaugural vision that led to the founding of the Living Faith
          Church World Wide (LFCWW), first called Liberation Faith Hour
          Ministries, in 1981.
        </p>
        <p>
          Two years after, on September 17, 1983, Pastor Enoch Adeboye, the
          General Overseer of the Redeemed Christian Church of God, ordained
          David Oyedepo and his wife, Florence Abiola Akano (now known as
          Faith Abiola Oyedepo), as pastors, and also officially commissioned
          the newly started church. Five years after, David Oyedepo was
          ordained a Bishop.
        </p>
        <p>
          Living Faith Church (aka Winners Chapel) started in Kaduna, but
          David Oyedepo moved to Lagos, the former capital of Nigeria, in
          September 1989, to start a new branch after receiving an
          instruction from God to reach out to the population in Lagos. This
          church in Lagos grew to become the international headquarters of
          Living Faith Church, with a constantly increasing flow of crowds
          spilling over to adjacent roads and onto decks of uncompleted
          buildings nearby, compelling people to stand for hours to listen
          to his teachings. This led to the building of the renowned Faith
          Tabernacle, as instructed by God.
        </p>
        <p>
          David Oyedepo is an acclaimed author and publisher who has written
          over 70 titles apart from periodicals. He is also
          Chairman/Publisher of Dominion Publishing House (DPH), the
          publishing arm of his ministry. DPH has over 4 million prints in
          circulation to date. Through God&rsquo;s grace upon him, Covenant
          University, Landmark University, Faith Academy, and Kingdom
          Heritage Model Schools have been established to equip the youth
          for impact.
        </p>
      </>
    ),
  },
  {
    id: "pillars",
    title: "Pillars of Faith",
    content: (
      <>
        <p>
          God commissioned us with the ministry of the Word of Faith, to
          preach it to all generations and liberate the world from all
          oppressions of the devil.
        </p>
        <p>
          By the leading of the Holy Ghost, Dr David Oyedepo was led to
          classify the mandate (Word of Faith) given to him by God into
          specific areas of emphasis, in direct response to Isaiah 40:6:
          &ldquo;The voice said, Cry. And he said, What shall I cry?&rdquo;
        </p>
        <p>
          He has named these twelve areas of emphasis as the 12 Pillars of
          our Commission. We have crossed Jordan into power, bearing the ark
          of liberation — here are the twelve stones, after the order of
          Joshua 4:1–8, 20–24, having stood firm upon these twelve stones.
          They have resulted in breakthroughs and amazing testimonies, both
          for the ministry and all who are partakers with us of the same
          grace.
        </p>
        <p className="text-[13px] italic text-ink-soft border border-dashed border-ink-soft/30 rounded-md px-4 py-3">
          Add the twelve pillar names and descriptions here once confirmed —
          left as a placeholder rather than guessing at doctrinal content.
        </p>
      </>
    ),
  },
];

export function MandateAccordion() {
  const [openId, setOpenId] = useState<string>(ITEMS[0].id);

  return (
    <section className="px-8 py-20">
      <div className="mx-auto">
        <div className="eyebrow text-gold-deep mb-3.5">Our foundation</div>
        <h2 className="text-[30px] mb-10">The mandate behind the ministry</h2>

        <div className="border-t border-ink-soft/15">
          {ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="border-b border-ink-soft/15">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.id}`}
                  className="w-full flex items-center justify-between text-left py-5 gap-4"
                >
                  <span
                    className={`text-[19px] transition-colors ${
                      isOpen ? "text-gold-deep" : "text-ink"
                    }`}
                  >
                    {item.title}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-gold-deep" : "text-ink-soft"
                    }`}
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  id={`panel-${item.id}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="pb-7 flex flex-col gap-4 text-[15.5px] text-ink-soft leading-[1.85]">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}