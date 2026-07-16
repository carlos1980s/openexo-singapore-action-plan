"use client";

import { useEffect, useState } from "react";

const steps = [
  { week: "01", title: "Align with Salim", text: "Secure approval for a 90-day Singapore market test." },
  { week: "02", title: "Open four doors", text: "Find two warm paths each into UOB, OCBC, DBS and HSBC." },
  { week: "03", title: "Convene the room", text: "Host one private roundtable for 8–12 banking leaders." },
  { week: "04", title: "Convert the signal", text: "Offer two diagnostics and qualify one lighthouse pilot." },
];

const targets = [
  { name: "UOB", tag: "Priority 1", move: "Pitch an AI-native operating-model diagnostic." },
  { name: "OCBC", tag: "Priority 2", move: "Lead with human + AI wealth advisory." },
  { name: "DBS", tag: "Priority 3", move: "Invite as a thought-leadership anchor first." },
  { name: "HSBC", tag: "Priority 4", move: "Propose an Asia wealth transformation workshop." },
];

const salimNote = `Salim — I’d like to propose a focused 90-day Singapore market test for OpenExO 3.0 in banking. I will convene a private executive roundtable, open qualified conversations with priority banks, and aim to convert one into a lighthouse pilot. I’d ask OpenExO for methodology alignment, selective senior participation, and permission to position the initiative appropriately. Success would be measured by 8 executive conversations, 2 diagnostics, and 1 qualified pilot. Would you be open to a 20-minute discussion?`;

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
          <div><strong>08</strong><span>executive conversations</span></div>
          <div><strong>01</strong><span>private roundtable</span></div>
          <div><strong>02</strong><span>paid diagnostics</span></div>
          <div><strong>01</strong><span>qualified pilot</span></div>
        </div>
      </section>

      <section className="section shell" id="targets">
        <div className="sectionHead">
          <div><span className="index">01</span><h2>Start with four</h2></div>
          <p>Concentrate effort. Earn one credible result before widening the field.</p>
        </div>
        <div className="targetGrid">
          {targets.map((target) => (
            <article className="targetCard" key={target.name}>
              <span className="tag">{target.tag}</span>
              <h3>{target.name}</h3>
              <p>{target.move}</p>
              <span className="cardArrow">↗</span>
            </article>
          ))}
        </div>
        <p className="nextLine"><strong>Next wave</strong> Citi · CIMB · Maybank <span>│</span> <strong>Co-design</strong> GXS · Trust Bank</p>
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
        <p className="guardrail"><strong>Guardrail</strong><br />Do not use Standard Chartered relationships, information or endorsement without written approval.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
