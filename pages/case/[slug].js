import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const caseStudies = {
  'krofta': {
    title: 'Krofta Corporate Website',
    category: 'Web Experience',
    client: 'Krofta Engineering',
    year: '2024',
    services: ['Web Design', 'Brand Identity', 'Development'],
    image: '/assets/case-krofta.png',
    problem: 'Krofta, a leading industrial solutions provider, had an outdated website that failed to reflect their premium positioning and technical expertise. The existing site had poor mobile experience, slow load times, and didn\'t effectively communicate their value proposition to enterprise clients.',
    approach: 'We conducted stakeholder interviews and competitive analysis to understand their market position. Our approach focused on creating a sophisticated, content-first design that showcased their technical capabilities while maintaining accessibility. We built the site on Next.js for optimal performance and implemented a dark theme with gold accents to convey luxury and precision.',
    outcome: 'The new website achieved a 95+ Lighthouse score, reduced bounce rate by 45%, and increased qualified lead submissions by 60%. Mobile traffic increased by 80%, and average session duration improved by 3 minutes. The client reported significantly improved brand perception from enterprise prospects.',
    metrics: [
      { label: 'Lighthouse Score', value: '95+' },
      { label: 'Bounce Rate Reduction', value: '45%' },
      { label: 'Lead Increase', value: '60%' },
      { label: 'Mobile Traffic Growth', value: '80%' }
    ]
  },
  'clinic-emr': {
    title: 'Healthcare EMR System',
    category: 'Custom Software',
    client: 'Multi-Clinic Healthcare Network',
    year: '2024',
    services: ['Product Design', 'Full-Stack Development', 'HIPAA Compliance'],
    image: '/assets/case-emr.jpg',
    problem: 'A growing network of 50+ clinics was using disparate paper-based systems and legacy software that couldn\'t scale. Doctors spent excessive time on administrative tasks, patient data was fragmented across locations, and there was no unified reporting capability. HIPAA compliance was a constant concern.',
    approach: 'We designed a modern, cloud-based EMR system with an intuitive interface that minimized clicks and cognitive load for healthcare providers. The architecture prioritized data security with end-to-end encryption, role-based access control, and comprehensive audit logging. We implemented real-time sync across locations and built mobile-responsive interfaces for on-the-go access.',
    outcome: 'The system now serves 50+ clinics with 200+ active users daily. Doctors report 40% reduction in administrative time, patient check-in time decreased by 60%, and the network achieved full HIPAA compliance certification. The unified reporting dashboard enabled data-driven decisions that improved patient outcomes and operational efficiency.',
    metrics: [
      { label: 'Clinics Served', value: '50+' },
      { label: 'Admin Time Saved', value: '40%' },
      { label: 'Check-in Time Reduction', value: '60%' },
      { label: 'Daily Active Users', value: '200+' }
    ]
  },
  'saas-dashboard': {
    title: 'SaaS Analytics Dashboard',
    category: 'Web Application',
    client: 'Enterprise Analytics Platform',
    year: '2024',
    services: ['UI/UX Design', 'Frontend Development', 'Data Visualization'],
    image: '/assets/hero-mockup.jpg',
    problem: 'An enterprise analytics platform had a powerful backend but a confusing, cluttered interface that frustrated users. Complex data visualizations were hard to interpret, key insights were buried in menus, and the mobile experience was non-existent. User engagement was declining despite adding new features.',
    approach: 'We conducted extensive user research and usability testing to identify pain points. Our redesign focused on progressive disclosure, surfacing the most critical insights first while keeping advanced features accessible. We implemented a dark theme with electric blue accents for reduced eye strain during extended use, redesigned all charts for clarity, and built a fully responsive experience.',
    outcome: 'User engagement increased by 40%, time-to-insight decreased by 55%, and customer satisfaction scores improved from 6.2 to 8.7/10. Mobile usage grew from 5% to 35% of total sessions. The client reported a 25% reduction in support tickets and significantly improved user retention rates.',
    metrics: [
      { label: 'Engagement Increase', value: '40%' },
      { label: 'Time-to-Insight Reduction', value: '55%' },
      { label: 'CSAT Improvement', value: '8.7/10' },
      { label: 'Mobile Usage Growth', value: '35%' }
    ]
  }
}

export default function CaseStudy() {
  const router = useRouter()
  const { slug } = router.query
  const study = caseStudies[slug]

  if (!study) {
    return (
      <main style={{ paddingTop: '80px', minHeight: '60vh' }}>
        <div className="container section" style={{ textAlign: 'center' }}>
          <h1>Case Study Not Found</h1>
          <Link href="/work" className="btn btn-primary" style={{ marginTop: 'var(--spacing-md)' }}>
            Back to Work
          </Link>
        </div>
      </main>
    )
  }

  return (
    <>
      <Head>
        <title>{study.title} - Edgesof Solutions</title>
        <meta name="description" content={study.problem.substring(0, 155)} />
      </Head>

      <main style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section">
          <div className="container">
            <Link href="/work" style={{ color: 'var(--color-accent)', marginBottom: 'var(--spacing-sm)', display: 'inline-block' }}>
              ← Back to Work
            </Link>
            <div style={{ maxWidth: '800px' }}>
              <div style={{ 
                fontSize: '0.9rem', 
                color: 'var(--color-accent)', 
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--spacing-xs)'
              }}>
                {study.category}
              </div>
              <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-sm)' }}>
                {study.title}
              </h1>
              <div style={{ display: 'flex', gap: 'var(--spacing-md)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                <div><strong>Client:</strong> {study.client}</div>
                <div><strong>Year:</strong> {study.year}</div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {study.services.map((service, i) => (
                  <span 
                    key={i}
                    style={{
                      fontSize: '0.9rem',
                      padding: '0.5rem 1rem',
                      background: 'rgba(26, 115, 232, 0.1)',
                      color: 'var(--color-accent)',
                      borderRadius: '4px'
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section style={{ background: 'var(--color-bg-secondary)', padding: 'var(--spacing-lg) 0' }}>
          <div className="container">
            <img 
              src={study.image} 
              alt={study.title}
              style={{ 
                width: '100%', 
                borderRadius: 'var(--border-radius)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
              }}
            />
          </div>
        </section>

        {/* Problem */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)', color: 'var(--color-accent)' }}>
              The Problem
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
              {study.problem}
            </p>
          </div>
        </section>

        {/* Approach */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)', color: 'var(--color-accent)' }}>
              Our Approach
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
              {study.approach}
            </p>
          </div>
        </section>

        {/* Outcome */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)', color: 'var(--color-accent)' }}>
              The Outcome
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>
              {study.outcome}
            </p>
            
            {/* Metrics */}
            <div className="grid grid-2" style={{ gap: 'var(--spacing-sm)', marginTop: 'var(--spacing-md)' }}>
              {study.metrics.map((metric, i) => (
                <div key={i} style={{ 
                  padding: 'var(--spacing-sm)', 
                  background: 'var(--color-bg-secondary)',
                  borderRadius: 'var(--border-radius)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '0.25rem' }}>
                    {metric.value}
                  </div>
                  <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>
              Ready to Achieve Similar Results?
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>
              Let's discuss how we can help transform your digital presence.
            </p>
            <Link href="/contact" className="btn btn-primary">Start Your Project</Link>
          </div>
        </section>
      </main>
    </>
  )
}