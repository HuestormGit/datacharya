import "./ApproachSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import chetak from "../../assets/CHETAK.png";
import chaturvima from "../../assets/CHATURVIMA.png";
import dataraksha from "../../assets/DATARAKSHA.png";
import agenticai from "../../assets/agenticai.png";
import trustlink from "../../assets/TRUSTLINK.png";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    title: "DISCOVER",
    subtitle: "See the Truth Beneath the Surface",
    desc: "Every transformation begins by uncovering reality: gaps, inefficiencies, system behaviour, customer journeys, financial leakage, and data flow patterns.",
    subheading: "A complete, unbiased map of how the enterprise actually works.",
    logo: chetak,
    list: [
      "AI Readiness Assessments",
      "IT / SAP / Process Due Diligence",
      "Platform Architecture Discovery",
      "Customer Journey Mapping",
      "Data Flow Diagnostics"
    ],
    btn: "Take a trial",
  },
  {
    title: "QUALITY",
    subtitle: "Build Clean, Reliable, Actionable Data",
    desc: "Quality is the foundation of every insight, automation, or ERP success.",
    subheading: "High-fidelity data that supports accurate reporting, analytics, and AI.",
    logo: chaturvima,
    list: [
        "Master Data Quality Engine (duplicates, gaps, structural issues)",
        "SAP L1 Repair + Quality Correction Agents",
        "Domain Quality Models (Finance, SCM, NBFC, Pharma)",
        "Behavioural Quality Insights (Chaturvima)",
        "Secondary Sales & Field Data Quality Models",
        "Data Standardisation Frameworks"
      
    ],
    btn: "Take a trial",
  },
  {
    title: "GOVERN",
    subtitle: "Create Order, Compliance & Accountability",
    desc: "Governance isn’t control - it’s clarity. This stage ensures the organisation’s data, decisions, and systems follow ethical, regulatory, and operational discipline.",
    subheading: "A stable, transparent, compliant organisation.",
    logo: dataraksha,
    list: [
      "Dataraksha – DPDP Readiness, Consent Governance, Control Scoring",
        "TrustLink – Identity, Credentialing & Access Governance",
        "Agentic AI – Policy Breach Alerts, SoD Monitoring, Risk Flags",
        "Org Governance Framework (roles, R&R, workflows)",
        "IT, SAP & Security Governance Models",
        "Carve-out / TSA / ERP Governance Frameworks",
    ],
    btn: "Take a trial",
  },
  {
    title: "INTELLIGENCE",
    subtitle: "Make the Enterprise Think",
    desc: "Here, data becomes insight. And insight becomes foresight.",
    subheading: "Leaders see what matters and can act ahead of time.",
    logo: agenticai,
    list: [
        "Agentic AI – Financial, SCM, Procurement, P&L, Revenue Leakage Insights",
        "Predictive Dashboards & CXO Cockpits",
        "Advanced Analytics for Digital, Pharma, NBFC & Manufacturing",
        "Market & Efficiency Intelligence",
        "Leadership & Culture Intelligence (Chaturvima)",
        "Due Diligence Scoring Engines",
        "Working Capital, Profitability & Product Intelligence",
    ],
    btn: "Take a trial",
  },
  {
    title: "TRUST",
    subtitle: "Build Verifiability, Confidence & Transparency Once intelligence is established, trust becomes the differentiator.",
    desc: "Trust across people, partners, processes, and digital ecosystems.",
    subheading: "Enterprises become reliable and verifiable - internally and externally.",
    logo: trustlink,
    list: [
        "TrustLink – Digital Passports, Partner Verification, Credential Ecosystem",
        "Dataraksha – Compliance Trust & Assurance",
       " Dataneeti – Ethical Intelligence & Dharmic Decision Principles",
        "Transparent Reporting & Audit-Traceability Frameworks",
        "Access, Consent & Responsibility Architecture",
    ],
    btn: "Take a trial",
  },
  {
    title: "AUTOMATE",
    subtitle: "Replace Repetition With Intelligence",
    desc: "Automation becomes meaningful only after governance and intelligence are in place.",
    subheading: "The organisation moves faster, with fewer errors and lower cost.",
    logo: agenticai,
    list: [
        "Agentic AI Automation Agents",
        "SAP L1 ticket automation",
        "Reconciliation",
        "Invoice matching",
        "Compliance monitoring",
        "Integration Engine",
        "ERP ↔ CRM ↔ DMS ↔ Field Apps ↔ Banking",
        "RPA Micro-Automations (NBFC, Pharma, Supply Chain)",
        "Workflow Automation (Chaturvima Alignment Nudges)",
        "Rule-Based + AI-Assisted Operational Automation",
    ],
    btn: "Take a trial",
  },
  {
    title: "TRANSFORM",
    subtitle: "Shift the Enterprise Into a New State of Being",
    desc: "Transformation is not a project - it is a re-architecture of how a business thinks and behaves",
    subheading: "A future-ready organisation capable of scaling with clarity and purpose.",
    logo: chaturvima,
    list: [
        "Chaturvima – 4D Enterprise Transformation Model",
        "(Honeymoon → Self-Introspection → Soul Searching → Steady State)",
        "SAGE Model – Sense → Align → Govern → Elevate",
        "Vision–Mission–Execution Alignment",
        "CXO Advisory – Operating Model + Strategy Redesign",
        "M&A: Carve-out, TSA, ERP Independence, Integration",
        "Industry Frameworks (Pharma, NBFC, Manufacturing, Digital)",
        "Platform Modernisation & Scalable Architecture Roadmaps",
      
    ],
    btn: "Take a trial",
  },
];

function ApproachSlider() {
  return (
    <section className="ApproachSlider">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 30000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
          1536: { slidesPerView: 3},
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="card">
                <div className="left">
                    <h2 className="Data-500-48-24">{slide.title}</h2>
                    <h4 className="Data-300-24-36">{slide.subtitle}</h4>
                    <p className="body-16-24">{slide.desc}</p>
                </div>
                <div className="right">
                    <img src={slide.logo} alt="logo" />
                    <p className="subheading Data-300-18-24">{slide.subheading}</p>
                    <button className="elementor-btn">{slide.btn}</button>
                    <ul>
                        {slide.list.map((item, i) => (
                        <li key={i} className="body-16-24">{item}</li>
                        ))}
                    </ul>

                </div>              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </section>
  );
}

export default ApproachSlider;