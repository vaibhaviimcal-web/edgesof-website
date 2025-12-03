import Head from 'next/head'
import Link from 'next/link'

export default function Capabilities() {
  const capabilities = [
    {
      title: 'Web Experiences',
      description: 'Ultra-premium websites and web applications that combine stunning design with flawless engineering.',
      details: [
        'Next.js, React, and modern JavaScript frameworks',
        'Responsive design optimized for all devices',
        'Performance-first architecture with Core Web Vitals optimization',
        'Accessibility compliance (WCAG 2.1 AA)',
        'SEO-optimized structure and metadata',
        'Progressive Web App (PWA) capabilities'
      ]
    },
    {
      title: 'Brand Identity',
      description: 'Complete brand systems that establish clear, memorable, and cohesive visual identities.',
      details: [
        'Logo design and wordmark development',
        'Color palette and typography systems',
        'Brand guidelines and style guides',
        'Marketing collateral and templates',
        'Social media assets and templates',
        'Print and digital asset production'
      ]
    },
    {
      title: 'Presentation Design',
      description: 'Executive-level presentations that communicate complex ideas with clarity and visual impact.',
      details: [
        'Investor pitch decks',
        'Sales and marketing presentations',
        'Internal strategy decks',
        'Conference and keynote slides',
        'Custom templates and master slides',
        'Data visualization and infographics'
      ]
    },
    {
      title: 'AI & Automation',
      description: 'Intelligent automation solutions that streamline workflows and enhance productivity.',
      details: [
        'Custom AI integrations and chatbots',
        'Workflow automation with n8n, Zapier, Make',
        'Document processing and data extraction',
        'Email and communication automation',
        'API integrations and middleware',
        'Process optimization and consulting'
      ]
    },
    {
      title: 'CRM & ERP Systems',
      description: 'Lightweight, custom-built systems for customer management and business operations.',
      details: [
        'Custom CRM solutions tailored to your workflow',
        'Lead tracking and pipeline management',
        'Customer communication history',
        'Sales reporting and analytics',
        'Integration with existing tools',
        'Mobile-responsive interfaces'
      ]
    },
    {
      title: 'Healthcare EMR',
      description: 'Modern electronic medical records systems designed for clinics and healthcare providers.',
      details: [
        'Patient records and medical history',
        'Appointment scheduling and management',
        'Prescription and treatment tracking',
        'HIPAA-compliant data security',
        'Multi-provider and multi-location support',
        'Reporting and analytics dashboards'
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>Capabilities - Edgesof Solutions</title>
        <meta name="description" content="Explore our capabilities in web development, brand identity, AI automation, and custom systems." />
      </Head>

      <main style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-md)' }}>
              What We Build
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
              From web experiences to intelligent automation, we deliver systems engineered for precision and built to last.
            </p>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ gap: 'var(--spacing-lg)' }}>
              {capabilities.map((capability, index) => (
                <div key={index} className="card">
                  <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-sm)', color: 'var(--color-accent)' }}>
                    {capability.title}
                  </h2>
                  <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)', fontSize: '1.05rem' }}>
                    {capability.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {capability.details.map((detail, i) => (
                      <li key={i} style={{ 
                        color: 'var(--color-text-secondary)', 
                        marginBottom: '0.5rem',
                        paddingLeft: '1.5rem',
                        position: 'relative'
                      }}>
                        <span style={{ 
                          position: 'absolute', 
                          left: 0, 
                          color: 'var(--color-accent)' 
                        }}>→</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>
              Ready to Start Your Project?
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>
              Let's discuss how we can help you build something exceptional.
            </p>
            <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </section>
      </main>
    </>
  )
}