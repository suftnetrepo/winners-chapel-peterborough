import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { TeamGrid } from "./team-grid";
import { MandateAccordion } from "./mandate-accordion";

export const metadata: Metadata = {
  title: "About",
  description:
    "We are an arm of the Living Faith Church Worldwide, dedicated to preaching the Word of Faith throughout the United Kingdom and Europe.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About us"
        title="Who we are"
        description="A Bible-believing family in the heart of Peterborough, committed to worship, community, and living victorious."
      />

      <section className="px-8 py-20">
        <div className="max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <div className="eyebrow text-gold-deep mb-4">Our story</div>
            <h2 className="text-[30px] mb-6 max-w-[480px]">
              Welcome to Winners Chapel International, Peterborough.
            </h2>
            <div className="flex flex-col gap-5 text-[15.5px] text-ink-soft leading-[1.85]">
              <p>
                We are an arm of the Living Faith Church Worldwide. Our vision,
                as delivered to the Presiding Bishop, Dr David Oyedepo, is to
                preach the Word of Faith, liberating men everywhere from every
                oppression of the devil. We are dedicated to accomplishing this
                task throughout the United Kingdom, and Europe at large.
              </p>
              <p>
                Our church in London was officially inaugurated in 2002 to
                spread the Word of Faith and to bring the liberation mandate to
                the United Kingdom and Europe. We have experienced diverse
                testimonies as individuals and as a church ever since.
              </p>
              <p>
                We are glad you have come to this website because we know your
                life will never be the same again. Take time to browse through
                the site and we know it would be a blessing to you. Also, join
                any of our weekly and Sunday services and as you come to visit
                us, God will meet you at every point of your need.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] mx-auto w-full max-w-[380px]">
            <Image
              src={'/bishop.avif'}
              alt="Bishop"
              fill
              sizes="250px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

       <section className="bg-paper-alt py-20">
        <div className="max-w-[1160px] mx-auto">
         <MandateAccordion />
        </div>
      </section>

    
      <section className=" px-8 py-20">
        <div className="max-w-[1160px] mx-auto">
          <div className="text-center max-w-[560px] mx-auto mb-14">
            <div className="eyebrow text-gold-deep mb-3.5">Leadership</div>
            <h2 className="text-[30px]">Meet the team</h2>
          </div>
          <TeamGrid />
        </div>
      </section>
    </main>
  );
}
