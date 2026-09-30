import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toenail Fungus Survivor Foundation",
  description:
    "An evidence-aware public-interest project helping people navigate toenail fungus with practical information, survivor stories, professional pathways, and support without shame.",
  metadataBase: new URL("https://tfsf.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Toenail Fungus Survivor Foundation",
    description:
      "Practical information, lived experience, and a clearer path forward for people dealing with toenail fungus.",
    type: "website",
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
      "The American Academy of Dermatology notes that conditions such as nail psoriasis or nail injury can look similar. A clinician may use a nail sample or other evaluation to help confirm the cause.",
    source: "American Academy of Dermatology",
    href: "https://www.aad.org/public/diseases/a-z/nail-fungus-treatment",
  },
  {
    number: "03",
    kicker: "VISIBLE CHANGE TAKES TIME",
    title: "A healthier nail can take patience.",
    body:
      "Nails grow slowly, so the visible appearance of a nail can improve gradually even after the underlying infection has begun responding to treatment.",
    source: "American Academy of Dermatology",
    href: "https://www.aad.org/public/diseases/a-z/nail-fungus-treatment",
  },
];

const journey = [
  ["01", "Recognize", "Learn what may be happening without trying to diagnose yourself from a photo."],
  ["02", "Confirm", "Understand when professional evaluation can help separate fungus from look-alike nail conditions."],
  ["03", "Treat", "Learn the treatment paths professionals may use and why timelines can vary."],
  ["04", "Recover", "Track progress, reduce avoidable recurrence risks, and get back to normal life."],
];

export default function Home() {
  return (
    <main>
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
          <a href="#why">Why TFSF</a>
          <a href="#evidence">Evidence</a>
          <a href="#stories">Stories</a>
          <a href="#support">Support</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A WEIRDLY UNDERSERVED HEALTH CONVERSATION</p>
          <h1>Stop hiding your feet. Start moving forward.</h1>
          <p className="hero-lead">
            Toenail fungus can be persistent, embarrassing, and frustrating to navigate. TFSF is being built to make the conversation easier: useful information, real lived experience, professional pathways, and support without humiliation.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#support">Join the founding effort <span>↗</span></a>
            <a className="button button-quiet" href="#evidence">Read the evidence</a>
          </div>

          <div className="proof-strip" aria-label="Project principles">
            <span>NO JUDGMENT</span>
            <span>NO MIRACLE CLAIMS</span>
            <span>NO FAKE TESTIMONIALS</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <img src="/tfsf.svg" alt="Abstract TFSF illustration representing progress and survivor support" />
          <div className="hero-card-note">
            <span>THE POINT</span>
            <strong>Make the awkward conversation easier.</strong>
            <p>Then make the next step clearer.</p>
          </div>
        </div>
      </section>

      <section className="statement section" id="why">
        <div className="section-label">01 / WHY THIS EXISTS</div>
        <div className="statement-grid">
          <h2>The problem is gross. The person is not.</h2>
          <div className="statement-copy">
            <p>
              The internet tends to handle toenail fungus in one of three ways: joke about it, frighten people with extreme photos, or sell them a miracle cure.
            </p>
            <p>
              TFSF is meant to sit somewhere more useful between embarrassment and action. You should be able to say, “I think I might have this,” learn what is actually known, hear from people who have lived through it, and figure out what a qualified professional can do next.
            </p>
          </div>
        </div>
      </section>

      <section className="journey section">
        <div className="section-intro">
          <div>
            <div className="section-label">02 / THE SURVIVOR JOURNEY</div>
            <h2>Four steps. No shame required.</h2>
          </div>
          <p>
            The model is intentionally simple. It is about helping somebody move from uncertainty to a reasonable next action without pretending the internet can replace professional care.
          </p>
        </div>

        <div className="journey-grid">
          {journey.map(([number, title, body]) => (
            <article className="journey-card" key={number}>
              <span className="card-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="evidence-section section" id="evidence">
        <div className="section-label">03 / EVIDENCE DESK</div>
        <div className="evidence-heading">
          <h2>Useful facts, not internet folklore.</h2>
          <p>Educational content only. Not a diagnosis or personal treatment plan.</p>
        </div>

        <div className="evidence-grid">
          {evidence.map((item) => (
            <article className="evidence-card" key={item.number}>
              <div className="card-topline">
                <span>{item.number}</span>
                <span>{item.kicker}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a href={item.href} target="_blank" rel="noreferrer">
                Read source ↗
              </a>
              <small>{item.source}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="stories section" id="stories">
        <div className="stories-copy">
          <div className="section-label">04 / THE WALL OF VICTORY</div>
          <h2>Real people. Real journeys. Published with permission.</h2>
          <p>
            The long-term vision is a library of first-person stories covering the awkward parts people rarely talk about: what they noticed, what they tried, what finally led them to professional care, what recovery looked like, and when they stopped thinking about their feet every time they put on sandals.
          </p>
          <p>
            No scraped forum photos. No invented success stories. No synthetic “before and after” theater. The person who lived the story should control how it is told.
          </p>
        </div>

        <div className="story-list">
          <div className="story-card">
            <span>STORY 001 / SEEKING</span>
            <strong>First survivor interview</strong>
            <p>Looking for an initial contributor willing to share a candid, permission-based first-person story.</p>
          </div>
          <div className="story-card">
            <span>STORY 002 / SEEKING</span>
            <strong>Clinical perspective</strong>
            <p>Looking for a podiatrist or dermatologist willing to review public education for accuracy and clarity.</p>
          </div>
          <div className="story-card story-card-accent">
            <span>EDITORIAL STANDARD</span>
            <strong>Every story earns trust.</strong>
            <p>Clear consent, clear context, no medical promises, no humiliation as a growth tactic.</p>
          </div>
        </div>
      </section>

      <section className="directory section">
        <div>
          <div className="section-label">05 / FIND A PRO</div>
          <h2>A directory can come later. Trust comes first.</h2>
          <p>
            The planned directory will connect people with qualified podiatrists and dermatologists. A clinician will not be called “Survivor-Certified” unless a real, documented program exists and qualified professionals actually participate.
          </p>
        </div>

        <div className="directory-panel">
          <div className="directory-search">
            <span>ZIP CODE</span>
            <strong>Coming after clinical partnerships are established.</strong>
          </div>
          <div className="directory-meta">
            <span>PARTNER CRITERIA</span>
            <p>Qualifications · licensure · transparency · patient respect</p>
          </div>
        </div>
      </section>

      <section className="support section" id="support">
        <div className="support-panel">
          <div className="section-label">06 / BUILD THE FOUNDATION</div>
          <h2>Turn an awkward problem into a better support system.</h2>
          <p>
            The project is currently in formation. The first job is credibility: build the evidence library, recruit clinical reviewers, collect permission-based survivor stories, and see whether the community actually helps people.
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
            TFSF is presented here as a venture concept in formation. This site does not claim IRS-recognized tax-exempt status, tax-deductible contributions, clinical certification, or a current nonprofit operating structure.
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
            A survivor-centered health-information concept designed around clarity, dignity, evidence, and a practical path forward.
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
