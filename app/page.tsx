import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toenail Fungus Survivor Foundation | Evidence, Support & Next Steps",
  description:
    "A survivor-centered public-interest project for people navigating toenail fungus: practical education, professional-care pathways, permission-based stories, and support without shame.",
  metadataBase: new URL("https://tfsf.vercel.app"),
  alternates: { canonical: "/" },
  keywords: [
    "toenail fungus",
    "onychomycosis",
    "toenail fungus treatment",
    "toenail fungus information",
    "foot health",
    "podiatrist",
    "dermatologist",
  ],
  openGraph: {
    title: "Toenail Fungus Survivor Foundation",
    description:
      "Evidence-aware information and survivor-centered support for people navigating toenail fungus.",
    type: "website",
    siteName: "Toenail Fungus Survivor Foundation",
  },
};

const photos = {
  hero: {
    src: "https://images.pexels.com/photos/8721011/pexels-photo-8721011.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8721011.jpg&fm=jpg",
    alt: "A person walking through a green field in sandals.",
    credit: "Mikhail Nilov / Pexels",
    href: "https://www.pexels.com/photo/person-in-white-pants-and-brown-leather-sandals-on-green-grass-8721011/",
  },
  clinical: {
    src: "https://images.pexels.com/photos/33934620/pexels-photo-33934620.jpeg?cs=srgb&dl=pexels-natalia-lara-372779991-33934620.jpg&fm=jpg",
    alt: "A healthcare professional examining a patient's foot.",
    credit: "Natalia Lara / Pexels",
    href: "https://www.pexels.com/photo/medical-consultation-with-doctor-examining-foot-33934620/",
  },
  conversation: {
    src: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?cs=srgb&dl=pexels-cottonbro-7579831.jpg&fm=jpg",
    alt: "A doctor and patient having a positive consultation.",
    credit: "cottonbro studio / Pexels",
    href: "https://www.pexels.com/photo/a-doctor-talking-the-patient-7579831/",
  },
  community: {
    src: "https://images.pexels.com/photos/33714885/pexels-photo-33714885.jpeg?cs=srgb&dl=pexels-bertellifotografia-33714885.jpg&fm=jpg",
    alt: "A diverse group of people talking together indoors.",
    credit: "Matheus Bertelli / Pexels",
    href: "https://www.pexels.com/photo/group-of-diverse-friends-engaging-in-conversation-33714885/",
  },
  selfCare: {
    src: "https://images.pexels.com/photos/9146379/pexels-photo-9146379.jpeg?cs=srgb&dl=pexels-ron-lach-9146379.jpg&fm=jpg",
    alt: "Bare feet resting in a calm self-care setting.",
    credit: "Ron Lach / Pexels",
    href: "https://www.pexels.com/photo/photo-of-a-feet-9146379/",
  },
};

const evidence = [
  {
    number: "01",
    kicker: "COMMON ENOUGH TO MATTER",
    title: "Toenail fungus is a real, common problem.",
    body:
      "The CDC says nail infections (onychomycosis) may affect up to 14% of the population, with toenails affected more often than fingernails.",
    source: "Centers for Disease Control and Prevention",
    href: "https://www.cdc.gov/ringworm/signs-symptoms/index.html",
  },
  {
    number: "02",
    kicker: "IDENTIFICATION MATTERS",
    title: "A changed nail is not automatically fungus.",
    body:
      "The American Academy of Dermatology notes that nail psoriasis, injury, and other conditions can look similar. A clinician may use examination or a nail sample to help identify the cause.",
    source: "American Academy of Dermatology",
    href: "https://www.aad.org/public/diseases/a-z/nail-fungus-treatment",
  },
  {
    number: "03",
    kicker: "VISIBLE CHANGE TAKES TIME",
    title: "A healthier nail can take patience.",
    body:
      "Because nails grow slowly, visible changes can lag behind the point at which an underlying problem has started responding to care.",
    source: "American Academy of Dermatology",
    href: "https://www.aad.org/public/diseases/a-z/nail-fungus-treatment",
  },
];

const journey = [
  ["01", "Notice", "Something changed. Start with information instead of a panic search."],
  ["02", "Confirm", "Understand why professional evaluation can matter when a nail looks abnormal."],
  ["03", "Care", "Learn what professional treatment pathways may involve and why timelines vary."],
  ["04", "Move on", "Track progress, protect your routines, and stop letting the problem define the moment."],
];

const audiences = [
  {
    index: "A",
    title: "I think I might have it",
    text: "Start with the plain-language evidence and learn what a professional can help determine.",
    href: "#evidence",
  },
  {
    index: "B",
    title: "I was already diagnosed",
    text: "Explore recovery expectations, questions to take to appointments, and the future survivor toolkit.",
    href: "#toolkit",
  },
  {
    index: "C",
    title: "I want to share my story",
    text: "See how TFSF plans to publish first-person stories with explicit permission and context.",
    href: "#stories",
  },
  {
    index: "D",
    title: "I'm a professional",
    text: "Learn about the planned clinical-review and future directory pathways.",
    href: "#professionals",
  },
];

const faqs = [
  {
    q: "What is toenail fungus?",
    a:
      "Toenail fungus is commonly called onychomycosis. It is a fungal infection affecting the nail. TFSF uses the term as an educational topic, not as a way to diagnose an individual visitor.",
  },
  {
    q: "Can something else look like toenail fungus?",
    a:
      "Yes. The American Academy of Dermatology notes that other nail conditions and injuries can resemble fungus, which is one reason professional evaluation can be useful before assuming the cause.",
  },
  {
    q: "Why can a nail still look abnormal after treatment starts?",
    a:
      "Toenails grow slowly. A change in the visible nail can therefore take time, and the appearance of the nail may not change immediately after an underlying problem begins to respond.",
  },
  {
    q: "Does TFSF diagnose or treat people?",
    a:
      "No. The current site is an educational and community concept. It does not provide diagnosis, prescribe treatment, certify clinicians, or replace a qualified healthcare professional.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Toenail Fungus Survivor Foundation",
      url: "https://tfsf.vercel.app/",
      description:
        "Evidence-aware information and survivor-centered support for people navigating toenail fungus.",
    },
    {
      "@type": "MedicalWebPage",
      name: "Toenail Fungus Survivor Foundation",
      url: "https://tfsf.vercel.app/",
      about: {
        "@type": "MedicalCondition",
        name: "Onychomycosis",
        alternateName: "Toenail fungus",
      },
      isPartOf: { "@type": "WebSite", name: "Toenail Fungus Survivor Foundation" },
    },
  ],
};

function PhotoCredit({
  credit,
  href,
}: {
  credit: string;
  href: string;
}) {
  return (
    <a className="photo-credit" href={href} target="_blank" rel="noreferrer">
      {credit} ↗
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="top-rule" />

      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Toenail Fungus Survivor Foundation home">
          <span className="brand-mark">TFSF</span>
          <span className="brand-copy">
            <strong>Toenail Fungus Survivor Foundation</strong>
            <small>FOUNDING-STAGE PUBLIC-INTEREST PROJECT</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#start">Start here</a>
          <a href="#evidence">Evidence</a>
          <a href="#stories">Stories</a>
          <a href="#professionals">Professionals</a>
          <a href="#support">Support</a>
        </nav>

        <a className="nav-cta" href="#start">Find your path <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A BETTER WAY TO TALK ABOUT A VERY HUMAN PROBLEM</p>
          <h1>
            Stop hiding your feet.
            <span>Start moving forward.</span>
          </h1>
          <p className="hero-lead">
            Toenail fungus can be persistent, awkward, and frustrating to navigate.
            TFSF is being built to replace shame and internet folklore with useful
            information, real lived experience, and a clearer path to professional care.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#start">
              Start here <span>↓</span>
            </a>
            <a className="button button-quiet" href="#evidence">
              Explore the evidence
            </a>
          </div>

          <div className="hero-signals" aria-label="TFSF editorial principles">
            <span><i /> Survivor-centered</span>
            <span><i /> Evidence-aware</span>
            <span><i /> No miracle claims</span>
          </div>
        </div>

        <div className="hero-visual">
          <figure className="hero-photo">
            <img
              src={photos.hero.src}
              alt={photos.hero.alt}
              fetchPriority="high"
              width="1200"
              height="800"
            />
            <div className="hero-gradient" />
            <div className="hero-photo-caption">
              <span>THE POINT</span>
              <strong>Get back to the parts of life you actually want to think about.</strong>
              <PhotoCredit credit={photos.hero.credit} href={photos.hero.href} />
            </div>
          </figure>

          <div className="floating-card floating-card-one">
            <span>01</span>
            <strong>No shame.</strong>
            <small>The condition can be embarrassing without the person being embarrassing.</small>
          </div>

          <div className="floating-card floating-card-two">
            <span>02</span>
            <strong>Next step.</strong>
            <small>Good information should make the next decision easier.</small>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="TFSF focus areas">
        <div>EDUCATION</div>
        <div>SURVIVOR STORIES</div>
        <div>PROFESSIONAL PATHWAYS</div>
        <div>RECOVERY</div>
        <div>COMMUNITY</div>
      </section>

      <section className="start-section section" id="start">
        <div className="section-kicker">01 / START HERE</div>
        <div className="start-heading">
          <div>
            <h2>One problem. Four different reasons to be here.</h2>
            <p>
              TFSF is designed around what a visitor is actually trying to do, not around
              an organizational chart.
            </p>
          </div>
          <div className="mini-quote">
            <span>CORE PRINCIPLE</span>
            <strong>The problem can be embarrassing without the person being embarrassing.</strong>
          </div>
        </div>

        <div className="audience-grid">
          {audiences.map((item) => (
            <a className="audience-card" href={item.href} key={item.index}>
              <span>{item.index}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <b>Explore <span>↗</span></b>
            </a>
          ))}
        </div>
      </section>

      <section className="editorial-split section">
        <div className="editorial-image">
          <figure>
            <img
              src={photos.clinical.src}
              alt={photos.clinical.alt}
              loading="lazy"
              width="1000"
              height="750"
            />
            <figcaption>
              Professional examination is part of the planned care pathway.
              <PhotoCredit credit={photos.clinical.credit} href={photos.clinical.href} />
            </figcaption>
          </figure>
        </div>
        <div className="editorial-copy">
          <div className="section-kicker">02 / WHY THIS EXISTS</div>
          <h2>The internet has plenty of information. It has less clarity.</h2>
          <p>
            Search for toenail fungus and you can quickly end up with dramatic images,
            miracle-product claims, conflicting advice, or pages written mainly to sell something.
          </p>
          <p>
            TFSF is being built as a different kind of destination: visually human, editorially
            disciplined, and explicit about the line between education, professional care, and commerce.
          </p>

          <div className="principle-list">
            <div><span>01</span><strong>Explain before selling.</strong></div>
            <div><span>02</span><strong>Show people, not shock photos.</strong></div>
            <div><span>03</span><strong>Give lived experience proper context.</strong></div>
          </div>
        </div>
      </section>

      <section className="journey section">
        <div className="section-intro">
          <div>
            <div className="section-kicker">03 / THE SURVIVOR JOURNEY</div>
            <h2>From “What is this?” to “Okay, I know what to do next.”</h2>
          </div>
          <p>
            The experience is intentionally simple. TFSF is a guide rail, not a replacement
            for professional evaluation.
          </p>
        </div>

        <div className="journey-grid">
          {journey.map(([number, title, body]) => (
            <article className="journey-card" key={number}>
              <span className="card-number">{number}</span>
              <div className="journey-marker" aria-hidden="true"><span /></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="evidence-section section" id="evidence">
        <div className="evidence-top">
          <div>
            <div className="section-kicker">04 / EVIDENCE DESK</div>
            <h2>Useful facts. Clean sourcing. Zero folklore.</h2>
          </div>
          <div className="evidence-badge">
            <span>Editorial rule</span>
            <strong>Source the claim, state the limit.</strong>
          </div>
        </div>

        <div className="evidence-layout">
          <div className="evidence-main">
            {evidence.map((item) => (
              <article className="evidence-card" key={item.number}>
                <div className="card-topline">
                  <span>{item.number}</span>
                  <span>{item.kicker}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="source-row">
                  <a href={item.href} target="_blank" rel="noreferrer">Read source ↗</a>
                  <small>{item.source}</small>
                </div>
              </article>
            ))}
          </div>

          <aside className="clinical-visual">
            <figure>
              <img
                src={photos.conversation.src}
                alt={photos.conversation.alt}
                loading="lazy"
                width="1000"
                height="667"
              />
              <figcaption>
                Good healthcare starts with a conversation.
                <PhotoCredit credit={photos.conversation.credit} href={photos.conversation.href} />
              </figcaption>
            </figure>
            <div className="clinical-note">
              <span>NOT MEDICAL ADVICE</span>
              <p>
                Educational content can help a visitor ask better questions. Diagnosis and
                treatment decisions belong with a qualified healthcare professional.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="faq section">
        <div className="section-kicker">05 / QUESTIONS PEOPLE ACTUALLY ASK</div>
        <div className="faq-heading">
          <h2>Start with answers that make the problem feel smaller.</h2>
          <p>
            Search-friendly, plain-language answers are part of the planned TFSF knowledge base.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary><span>+</span>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="story-section section" id="stories">
        <div className="story-visual">
          <figure className="story-photo-main">
            <img
              src={photos.community.src}
              alt={photos.community.alt}
              loading="lazy"
              width="1000"
              height="667"
            />
            <figcaption>
              Community is part of the long-term model.
              <PhotoCredit credit={photos.community.credit} href={photos.community.href} />
            </figcaption>
          </figure>

          <figure className="story-photo-small">
            <img
              src={photos.selfCare.src}
              alt={photos.selfCare.alt}
              loading="lazy"
              width="667"
              height="1000"
            />
            <figcaption>
              Recovery is personal.
              <PhotoCredit credit={photos.selfCare.credit} href={photos.selfCare.href} />
            </figcaption>
          </figure>
        </div>

        <div className="story-copy">
          <div className="section-kicker">06 / THE WALL OF VICTORY</div>
          <h2>Real people. Real journeys. Published with permission.</h2>
          <p>
            The long-term vision is a library of first-person stories covering the parts people
            rarely discuss: what they noticed, what pushed them to seek care, what the process felt like,
            and what life looked like when the problem stopped taking up so much mental space.
          </p>
          <p>
            There will be no scraped forum photos, invented testimonials, or synthetic “before and after”
            theater. The person who lived the story should control how it is told.
          </p>

          <div className="story-standards">
            <span>STORY STANDARD</span>
            <strong>Consent → Context → Dignity → Accuracy</strong>
          </div>

          <a className="text-link" href="#support">Help build the story library ↗</a>
        </div>
      </section>

      <section className="toolkit section" id="toolkit">
        <div className="toolkit-heading">
          <div>
            <div className="section-kicker">07 / SURVIVOR'S TOOLKIT</div>
            <h2>Resources people can actually use.</h2>
          </div>
          <p>
            The toolkit is planned as a practical layer above the evidence desk: appointment questions,
            care-tracking templates, story prompts, and plain-language explainers.
          </p>
        </div>

        <div className="toolkit-grid">
          <article><span>01</span><h3>Appointment prep</h3><p>Questions to bring to a podiatry or dermatology visit.</p><b>Planned resource</b></article>
          <article><span>02</span><h3>Progress log</h3><p>A simple way to record what you notice over time without obsessing over day-to-day changes.</p><b>Planned resource</b></article>
          <article><span>03</span><h3>Myth vs. evidence</h3><p>Clear explanations that separate common internet claims from sourced information.</p><b>Planned resource</b></article>
          <article><span>04</span><h3>Story starter</h3><p>A gentle framework for people who want to share what happened in their own words.</p><b>Planned resource</b></article>
        </div>
      </section>

      <section className="professionals section" id="professionals">
        <div className="professionals-copy">
          <div className="section-kicker">08 / FOR PROFESSIONALS</div>
          <h2>A future directory should earn trust before it earns a listing.</h2>
          <p>
            TFSF plans to build a clinician pathway around transparent qualifications, licensure,
            communication, and patient respect. A professional will not be labeled “Survivor-Certified”
            unless a real documented program exists.
          </p>
          <a className="text-link light-link" href="#support">Explore partnership pathway ↗</a>
        </div>

        <div className="professional-panel">
          <div><span>01</span><strong>Clinical review</strong><p>Review public-facing education for accuracy and clarity.</p></div>
          <div><span>02</span><strong>Directory criteria</strong><p>Document who qualifies and why before publishing listings.</p></div>
          <div><span>03</span><strong>Patient experience</strong><p>Build around respectful communication, not fear-based conversion.</p></div>
        </div>
      </section>

      <section className="support section" id="support">
        <div className="support-panel">
          <div className="section-kicker">09 / BUILD THE FOUNDATION</div>
          <h2>Make an awkward problem easier to live with—and easier to talk about.</h2>
          <p>
            The project is currently in formation. The first job is credibility: build the evidence library,
            recruit clinical reviewers, collect permission-based stories, and test whether the community
            actually helps people.
          </p>

          <div className="support-actions">
            <a className="button button-primary" href="https://josephjilovec.com/contact">Contact the founder ↗</a>
            <a className="button button-quiet" href="https://josephjilovec.com/portfolio/toenail-fungus-survivor-foundation">View project file ↗</a>
          </div>
        </div>

        <aside className="status-panel">
          <span>ORGANIZATIONAL STATUS</span>
          <h3>Founding-stage concept</h3>
          <p>
            TFSF is presented here as a venture concept in formation. This site does not claim IRS-recognized
            tax-exempt status, tax-deductible contributions, clinical certification, or a current nonprofit
            operating structure.
          </p>
          <a href="https://www.irs.gov/charities-non-profits/charitable-organizations" target="_blank" rel="noreferrer">IRS nonprofit guidance ↗</a>
        </aside>
      </section>

      <footer className="site-footer">
        <div>
          <div className="footer-brand">
            <span className="brand-mark">TFSF</span>
            <div>
              <strong>Toenail Fungus Survivor Foundation</strong>
              <small>FOUNDING-STAGE PUBLIC-INTEREST PROJECT</small>
            </div>
          </div>
          <p className="footer-note">
            A survivor-centered health-information concept designed around clarity, dignity, evidence,
            and a practical path forward.
          </p>
        </div>

        <div className="footer-links">
          <a href="https://josephjilovec.com">Joseph Jilovec</a>
          <a href="https://josephjilovec.com/portfolio">Portfolio</a>
          <a href="https://josephjilovec.com/contact">Contact</a>
        </div>
      </footer>

      <div className="legal-bar">
        <span>© 2026 Toenail Fungus Survivor Foundation concept</span>
        <span>Educational information only · Not medical advice</span>
      </div>
    </main>
  );
}
