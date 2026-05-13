import { useEffect, useRef, useState } from 'react'
import {
  Users,
  Zap,
  Shield,
  TrendingUp,
  ChevronRight,
  Brain,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Eye,
  RefreshCw,
  Scale,
} from 'lucide-react'

/* ─── Intersection Observer Hook ─── */
function useFadeIn() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

/* ─── Reusable animated section wrapper ─── */
function FadeSection({ children, className = '' }) {
  const [ref, visible] = useFadeIn()
  return (
    <div
      ref={ref}
      className={`section-fade ${visible ? 'section-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

/* ─── Section label pill ─── */
function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-700 text-white text-sm font-bold shrink-0">
        {number}
      </span>
      <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
        {label}
      </span>
    </div>
  )
}

/* ═══════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════ */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('intro')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['intro', 'context', 'idea', 'work', 'conclusion']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { id: 'intro', label: 'Intro' },
    { id: 'context', label: 'Context' },
    { id: 'idea', label: 'Idea' },
    { id: 'work', label: 'Work' },
    { id: 'conclusion', label: 'Conclusion' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo mark */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-700" />
          <span className="font-bold text-blue-900 text-sm tracking-tight">
            Randstad&nbsp;<span className="text-blue-500 font-normal">AI Concept</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                active === id
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile dots */}
        <div className="flex sm:hidden items-center gap-1.5">
          {links.map(({ id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                active === id ? 'bg-blue-700' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}

/* ═══════════════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#001A4E] via-[#003087] to-[#0057B8]"
    >
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute top-1/3 -left-32 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-blue-400/10" />

        {/* Abstract people / node matching visual */}
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 w-[420px]"
          viewBox="0 0 400 400"
          fill="none"
        >
          {/* Person nodes */}
          {[60, 160, 260].map((cy, i) => (
            <g key={i}>
              <circle cx="80" cy={cy} r="18" fill="white" />
              <circle cx="80" cy={cy - 28} r="10" fill="white" />
            </g>
          ))}
          {/* Job nodes */}
          {[80, 200, 320].map((cy, i) => (
            <rect key={i} x="280" y={cy - 20} width="56" height="40" rx="8" fill="white" />
          ))}
          {/* Connecting lines */}
          {[
            [80, 60, 280, 80],
            [80, 60, 280, 200],
            [80, 160, 280, 200],
            [80, 260, 280, 320],
            [80, 160, 280, 320],
          ].map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1.5" />
          ))}
          {/* Central AI node */}
          <circle cx="200" cy="200" r="28" fill="white" opacity="0.8" />
          <text x="200" y="205" textAnchor="middle" fontSize="11" fill="#003087" fontWeight="bold">AI</text>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Event tag */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-10">
          <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
          <span className="text-blue-100 text-sm font-medium">
            Managing Business with AI · Group Pitch
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-6">
          From Recruitment Scale to{' '}
          <span className="text-blue-300">Talent Intelligence</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl leading-relaxed mb-12">
          An AI-supported transformation concept for Randstad Nederland, focused on faster,
          fairer and more human candidate-job matching.
        </p>

        {/* Team */}
        <div className="flex flex-wrap gap-3">
          {['Remco Kuiken', 'Polle van Berlo', 'Nikita Andreev'].map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2"
            >
              <div className="w-7 h-7 rounded-full bg-blue-400/40 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{name[0]}</span>
              </div>
              <span className="text-white text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex items-center gap-2 text-blue-300 text-sm">
          <span>Scroll to explore</span>
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   SECTION 2 — CONTEXT
═══════════════════════════════════════════════ */
function Context() {
  const pressures = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Digital platforms compress margins',
      body: 'Job boards and aggregators commoditise access to candidates, squeezing traditional placement fees.',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Talent scarcity requires smarter sourcing',
      body: 'Ageing workforces and skills gaps mean volume-based CV sifting no longer finds the right people.',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Clients expect faster, higher-quality placements',
      body: 'Time-to-fill and quality-of-hire are boardroom KPIs; recruiters need sharper tools to deliver.',
    },
  ]

  return (
    <section id="context" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeSection>
          <SectionLabel number="2" label="Randstad at a Glance · 40 s" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 max-w-2xl mb-4">
            Randstad's core business is matching people with work.
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mb-14">
            But the market is shifting — and three strategic pressures demand a smarter approach.
          </p>
        </FadeSection>

        {/* Pressure cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {pressures.map(({ icon, title, body }, i) => (
            <FadeSection key={i}>
              <div className="h-full bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            </FadeSection>
          ))}
        </div>

        {/* Takeaway */}
        <FadeSection>
          <div className="bg-blue-700 rounded-2xl px-8 py-6 flex items-center gap-4">
            <Brain className="w-8 h-8 text-blue-200 shrink-0" />
            <p className="text-white text-lg font-semibold">
              AI matters because{' '}
              <span className="text-blue-200">matching is Randstad's economic core.</span>
            </p>
          </div>
        </FadeSection>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   SECTION 3 — THE IDEA
═══════════════════════════════════════════════ */
function Idea() {
  const flowSteps = [
    { label: 'Candidate data', sub: 'CV, skills, history', color: 'bg-blue-50 border-blue-200' },
    { label: 'Vacancy data', sub: 'Role, culture, requirements', color: 'bg-blue-50 border-blue-200' },
    { label: 'Historical placements', sub: 'Past match outcomes', color: 'bg-blue-50 border-blue-200' },
  ]

  return (
    <section id="idea" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeSection>
          <SectionLabel number="3" label="The Transformation Idea · 60 s" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 max-w-2xl mb-4">
            AI-supported candidate-job matching
          </h2>
          <p className="text-gray-500 max-w-xl mb-14 text-lg">
            A human-in-the-loop system that amplifies recruiter judgment rather than replacing it.
          </p>
        </FadeSection>

        {/* Flow diagram */}
        <FadeSection>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              {/* Input nodes */}
              <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[180px]">
                {flowSteps.map(({ label, sub, color }, i) => (
                  <div
                    key={i}
                    className={`border rounded-xl px-4 py-3 ${color}`}
                  >
                    <p className="text-sm font-semibold text-gray-800">{label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div className="flex lg:flex-col items-center gap-1 px-2 text-blue-400">
                <div className="w-8 h-px lg:w-px lg:h-8 bg-blue-300" />
                <ChevronRight className="w-5 h-5 lg:rotate-90" />
              </div>

              {/* AI engine */}
              <div className="bg-blue-700 rounded-2xl px-6 py-6 text-center text-white shadow-lg min-w-[140px]">
                <Brain className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <p className="font-bold text-sm">AI Matching Engine</p>
                <p className="text-xs text-blue-200 mt-1">Ranks & scores</p>
              </div>

              {/* Arrow */}
              <div className="flex lg:flex-col items-center gap-1 px-2 text-blue-400">
                <div className="w-8 h-px lg:w-px lg:h-8 bg-blue-300" />
                <ChevronRight className="w-5 h-5 lg:rotate-90" />
              </div>

              {/* Recruiter */}
              <div className="bg-white border-2 border-blue-200 rounded-2xl px-6 py-6 text-center min-w-[140px]">
                <Users className="w-8 h-8 mx-auto mb-2 text-blue-700" />
                <p className="font-bold text-sm text-gray-900">Recruiter Decision</p>
                <p className="text-xs text-gray-500 mt-1">Human judgment</p>
              </div>

              {/* Arrow */}
              <div className="flex lg:flex-col items-center gap-1 px-2 text-blue-400">
                <div className="w-8 h-px lg:w-px lg:h-8 bg-blue-300" />
                <ChevronRight className="w-5 h-5 lg:rotate-90" />
              </div>

              {/* Outcome */}
              <div className="bg-green-50 border border-green-200 rounded-2xl px-6 py-6 text-center min-w-[140px]">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="font-bold text-sm text-gray-900">Client Recommendation</p>
                <p className="text-xs text-gray-500 mt-1">Better placement</p>
              </div>
            </div>
          </div>
        </FadeSection>

        {/* Two callouts */}
        <div className="grid sm:grid-cols-2 gap-6">
          <FadeSection>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <p className="text-gray-700 text-base leading-relaxed">
                <span className="font-bold text-gray-900">The system does not replace recruiters.</span>{' '}
                It gives them a stronger decision-support layer — surfacing patterns a human mind cannot hold at scale.
              </p>
            </div>
          </FadeSection>
          <FadeSection>
            <div className="bg-blue-700 rounded-2xl p-6 shadow-sm">
              <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-2">Highest-leverage task</p>
              <p className="text-white text-lg font-semibold">
                Initial shortlist and ranking
              </p>
              <p className="text-blue-200 text-sm mt-2">
                This single step accounts for the majority of recruiter time — and the majority of placement quality variance.
              </p>
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   SECTION 4 — WHAT CHANGES
═══════════════════════════════════════════════ */
function Work() {
  const before = [
    'Manual CV screening',
    'Fragmented data',
    'Admin-heavy workflow',
    'Recruiter intuition under pressure',
  ]
  const after = [
    'AI-ranked shortlist',
    'Recruiter interpretation',
    'Explainable recommendations',
    'Stronger advisory role',
  ]

  const challenges = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Workforce readiness',
      body: 'Recruiters need training to trust, interpret and override AI recommendations confidently.',
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: 'Data integration',
      body: 'Siloed ATS, CRM and skills databases must be connected into a coherent, clean data layer.',
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: 'Fairness and transparency',
      body: 'Matching models must be auditable, free from proxy discrimination and explainable to candidates.',
    },
  ]

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeSection>
          <SectionLabel number="4" label="What Changes + Challenges · 75 s" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 max-w-2xl mb-14">
            The recruiter's job evolves — and so does the organisation.
          </h2>
        </FadeSection>

        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          {/* Before / After */}
          <FadeSection>
            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="p-6 border-r border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Before</span>
                  </div>
                  <ul className="space-y-3">
                    {before.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* After */}
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <span className="text-sm font-bold text-blue-700 uppercase tracking-widest">After</span>
                  </div>
                  <ul className="space-y-3">
                    {after.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeSection>

          {/* Challenge pillars */}
          <div className="flex flex-col gap-4">
            {challenges.map(({ icon, title, body }, i) => (
              <FadeSection key={i}>
                <div className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition-shadow">
                  <div className="w-9 h-9 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   SECTION 5 — CONCLUSION / GOVERNANCE
═══════════════════════════════════════════════ */
function Conclusion() {
  const triangle = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI improves prediction',
      body: 'Pattern-matching at scale surfaces the best-fit candidates faster than manual review.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Recruiters keep judgment',
      body: 'Every placement decision remains with a human who can interpret context and override the model.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Governance creates trust',
      body: 'Structured oversight ensures the system is fair, auditable and aligned with Randstad values.',
    },
  ]

  const mechanisms = [
    { icon: <Eye className="w-4 h-4" />, label: 'Explainability protocol' },
    { icon: <RefreshCw className="w-4 h-4" />, label: 'Recruiter override' },
    { icon: <Scale className="w-4 h-4" />, label: 'Bias monitoring' },
    { icon: <BarChart3 className="w-4 h-4" />, label: 'Quarterly audit' },
    { icon: <Shield className="w-4 h-4" />, label: 'Clear AI ownership' },
  ]

  return (
    <section
      id="conclusion"
      className="py-24 bg-gradient-to-br from-[#001A4E] via-[#003087] to-[#0057B8]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeSection>
          <SectionLabel number="5" label="Conclusion · 45 s" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white max-w-2xl mb-4">
            Not an IT implementation.
            <br />
            <span className="text-blue-300">A socio-technical transformation.</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-xl mb-14">
            Success depends equally on technology, people and governance — not any single pillar alone.
          </p>
        </FadeSection>

        {/* Triangle model */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {triangle.map(({ icon, title, body }, i) => (
            <FadeSection key={i}>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
                <div className="w-11 h-11 rounded-xl bg-white/20 text-white flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{body}</p>
              </div>
            </FadeSection>
          ))}
        </div>

        {/* Governance mechanisms */}
        <FadeSection>
          <div className="bg-white/10 border border-white/15 rounded-2xl p-6 mb-12">
            <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-4">
              Governance mechanisms
            </p>
            <div className="flex flex-wrap gap-3">
              {mechanisms.map(({ icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2"
                >
                  <span className="text-blue-300">{icon}</span>
                  <span className="text-white text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>

        {/* Final line */}
        <FadeSection>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              AI predicts.&nbsp;
              <span className="text-blue-300">Humans decide.</span>
              &nbsp;Governance earns trust.
            </p>
          </div>
        </FadeSection>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-[#001A4E] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-blue-400" />
          <span className="text-blue-300 text-sm font-medium">From Intuition to Intelligence · 2025</span>
        </div>
        <p className="text-blue-500 text-sm">
          Managing Business with AI · Remco Kuiken · Polle van Berlo · Nikita Andreev
        </p>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════════
   APP ROOT
═══════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Context />
        <Idea />
        <Work />
        <Conclusion />
      </main>
      <Footer />
    </>
  )
}
