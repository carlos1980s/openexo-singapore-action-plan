"use client";

import { useEffect, useState } from "react";

const steps = [
  { week: "01", title: "Map eight routes", text: "Find two warm introduction paths for each of the four banks." },
  { week: "02", title: "Send four theses", text: "Deliver one tailored, one-page hypothesis to each priority bank." },
  { week: "03", title: "Hold sponsor calls", text: "Complete four discovery conversations and confirm roundtable interest." },
  { week: "04", title: "Convert the room", text: "Convene the roundtable and issue two diagnostic proposals." },
];

const pursuits = [
  { rank: "01", name: "UOB", summary: "Best first target for a focused AI operating-model diagnostic.", operations: "Regional consumer and wealth banking, wholesale banking, payments and digital banking across its core ASEAN network.", why: "It has a formal Innovation Group, Enterprise AI leadership and active work on AI enablement and governance—strong foundations for an ExO 3.0 organization-design conversation.", contacts: [{ name: "Lee Zhu Kuang", role: "MD, Head of Innovation Group", url: "https://www.uobgroup.com/techecosystem/sff/sessions.page" }, { name: "Alvin Eng", role: "ED, Head of Enterprise AI", url: "https://www.uobgroup.com/techecosystem/sff/sessions.page" }], offer: "From enterprise AI adoption to an AI-native operating model.", moves: ["Find a warm path through Singapore’s fintech and data community.", "Send a one-page hypothesis on decision rights, AI governance and execution.", "Ask for a 25-minute fit call—not a sales presentation."] },
  { rank: "02", name: "OCBC", summary: "Strongest fit for strategy, transformation and human-plus-AI wealth.", operations: "Consumer and wealth, wholesale banking, transaction banking and private banking, led from Singapore across Southeast Asia and Greater China.", why: "OCBC is moving from AI tools to agentic workflows, including KYC and wealth-advisor enablement. The next question is how the organization, controls and roles must change.", contacts: [{ name: "Melvyn Low", role: "Group Chief Strategy & Transformation Officer", url: "https://www.ocbc.com/group/about-us/our-leadership/management-team/melvyn-low" }, { name: "Praveen Raina", role: "Head, Group Operations & Technology", url: "https://www.ocbc.com/group/about-us/our-leadership/management-team/praveen-raina" }], offer: "Designing the human + agent operating system for wealth and KYC.", moves: ["Lead with a warm introduction into Strategy & Transformation.", "Reference OCBC’s agentic KYC and wealth-advisor initiatives.", "Propose a session with strategy, operations, data and risk."] },
  { rank: "03", name: "DBS", summary: "Use as the ambition-setting anchor and thought-leadership partner.", operations: "Consumer and wealth, institutional banking, payments, treasury and markets across Singapore and key Asian growth markets.", why: "DBS already reports substantial value from AI and is prioritising agentic AI, transformation and operational resilience. The conversation must be enterprise-level—not another technology pitch.", contacts: [{ name: "Lim Him Chuan", role: "Country Head, DBS Singapore", url: "https://www.dbs.com/Bod/gmc-lim-him-chuan" }, { name: "Derrick Goh", role: "Group COO; Operations, Transformation & Data", url: "https://www.dbs.com/Bod/gmc-derrick-goh" }], offer: "The AI-native bank: speed, accountability and trust.", moves: ["Approach as a peer-contributor and convening partner.", "Ask for DBS input on the roundtable thesis first.", "Convert interest into a limited operating-model benchmark."] },
  { rank: "04", name: "HSBC", summary: "Best international-bank case for human-plus-AI wealth transformation.", operations: "International wealth, commercial and institutional banking, markets, payments and insurance, with Singapore as a priority cross-border wealth hub.", why: "Singapore clients are using AI while still demanding expert validation. HSBC is deploying adviser-enabled AI, creating a timely need to redesign advice, accountability and frontline work.", contacts: [{ name: "Ashmita Acharya", role: "Head, International Wealth & Premier Banking, Singapore", url: "https://www.about.hsbc.com.sg/news-and-media/singapore-investors-outpace-global-counterparts-in-ai-adoption" }, { name: "Ishan Sarkar", role: "Head, Wealth & Premier Solutions, Singapore", url: "https://www.about.hsbc.com.sg/news-and-media/hsbc-announces-new-head-of-wealth-and-premier-solutions-for-singapore" }], offer: "The human-AI advantage in Asian wealth management.", moves: ["Use your international-banking experience while approaching independently.", "Lead with frontline design, advisor trust and client outcomes.", "Invite HSBC to the roundtable before proposing a diagnostic."] },
];

const salimNote = `Salim — I’d like to propose a focused 90-day Singapore market test for OpenExO 3.0 in banking. I have mapped four priority banks, eight relevant decision-makers and a practical route to one lighthouse pilot. I would lead the local execution: tailored outreach, four sponsor conversations, a private executive roundtable and two diagnostic proposals. I’d ask OpenExO for methodology alignment, selective senior participation and permission to position the initiative appropriately. Would you be open to a 20-minute discussion?`;

export default function Home() {
  const [done, setDone] = useState<boolean[]>([false, false, false, false]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("openexo-sg-plan");
    if (saved) setDone(JSON.parse(saved));
  }, []);

  const toggle = (index: number) => {
    const next = done.map((value, i) => (i === index ? !value : value));
    setDone(next);
    window.localStorage.setItem("openexo-sg-plan", JSON.stringify(next));
  };

  const copyNote = async () => {
    await navigator.clipboard.writeText(salimNote);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const progress = done.filter(Boolean).length;

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="OpenExO Singapore home">
          <span className="brandMark">X</span>
          <span>OPENEXO / SG</span>
        </a>
        <a className="navLink" href="#plan">30-day plan <span>↘</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> SINGAPORE BANKING MARKET TEST</div>
        <h1>One market.<br /><em>One pilot.</em><br />90 days.</h1>
        <div className="heroBottom">
          <p>A short, measurable proposal to establish OpenExO’s banking foothold in Singapore—with you leading local execution.</p>
          <a className="primaryButton" href="#plan">Start the plan <span>↓</span></a>
        </div>
        <div className="signal" aria-hidden="true"><span /><span /><span /><span /><span /></div>
      </section>

      <section className="metricsBand">
        <div className="shell metrics">
          <div><strong>08</strong><span>named contacts</span></div>
          <div><strong>04</strong><span>sponsor meetings</span></div>
          <div><strong>02</strong><span>diagnostic proposals</span></div>
          <div><strong>01</strong><span>qualified pilot</span></div>
        </div>
      </section>

      <section className="section shell" id="targets">
        <div className="sectionHead">
          <div><span className="index">01</span><h2>Four bank pursuit files</h2></div>
          <p>Each target has a business reason, two credible entry points and a specific first offer.</p>
        </div>
        <div className="pursuits">
          {pursuits.map((pursuit) => (
            <article className="pursuit" key={pursuit.name}>
              <header><span>{pursuit.rank}</span><div><small>PRIORITY {pursuit.rank}</small><h3>{pursuit.name}</h3></div><p>{pursuit.summary}</p></header>
              <div className="pursuitGrid">
                <div><small>MAIN OPERATIONS</small><p>{pursuit.operations}</p></div>
                <div><small>WHY {pursuit.name}</small><p>{pursuit.why}</p></div>
                <div className="people"><small>PEOPLE TO CONTACT</small>{pursuit.contacts.map((contact) => <a href={contact.url} target="_blank" rel="noreferrer" key={contact.name}><b>{contact.name}</b><span>{contact.role} ↗</span></a>)}</div>
                <div><small>OPENING OFFER</small><p><b>“{pursuit.offer}”</b></p></div>
                <div className="moves"><small>FIRST THREE MOVES</small><ol>{pursuit.moves.map((move) => <li key={move}>{move}</li>)}</ol></div>
              </div>
            </article>
          ))}
        </div>
        <p className="nextLine"><strong>Contact sequence</strong> Warm introduction → short LinkedIn note → tailored one-pager → 25-minute fit call → roundtable invitation.</p>
      </section>

      <section className="section planSection" id="plan">
        <div className="shell">
          <div className="sectionHead light">
            <div><span className="index">02</span><h2>Your 30-day action board</h2></div>
            <div className="progressBox"><strong>{progress}/4</strong><span>moves complete</span></div>
          </div>
          <div className="progressTrack"><span style={{ width: `${progress * 25}%` }} /></div>
          <div className="stepList">
            {steps.map((step, index) => (
              <button className={`step ${done[index] ? "complete" : ""}`} key={step.week} onClick={() => toggle(index)}>
                <span className="week">W{step.week}</span>
                <span className="stepCopy"><strong>{step.title}</strong><small>{step.text}</small></span>
                <span className="check" aria-label={done[index] ? "Mark incomplete" : "Mark complete"}>{done[index] ? "✓" : ""}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell askSection">
        <div className="sectionHead">
          <div><span className="index">03</span><h2>The ask to Salim</h2></div>
          <p>Offer ownership of a result—not a request for a title.</p>
        </div>
        <div className="messageCard">
          <div className="quoteMark">“</div>
          <p>{salimNote}</p>
          <button className="copyButton" onClick={copyNote}>{copied ? "Copied" : "Copy message"}<span>{copied ? "✓" : "↗"}</span></button>
        </div>
      </section>

      <section className="roundtable">
        <div className="shell roundtableInner">
          <div><span className="index">04</span><p className="miniLabel">THE CONVENING IDEA</p></div>
          <h2>From AI pilots to the <em>AI-native bank.</em></h2>
          <p>A private session for 8–12 leaders across strategy, transformation, AI, risk, operations and workforce.</p>
        </div>
      </section>

      <footer className="shell footer">
        <p><strong>Role proposition</strong><br />Singapore market-development & ecosystem lead · 90-day pilot</p>
        <p className="guardrail"><strong>Your positioning</strong><br />Independent Singapore-based banking and enterprise-AI transformation leader.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
