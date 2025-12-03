import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Edgesof Solutions - Build Less. Achieve More.</title>
        <meta name="description" content="Digital systems engineered with precision, simplicity, and world-class craftsmanship." />
        <meta property="og:title" content="Edgesof Solutions - Build Less. Achieve More." />
        <meta property="og:description" content="Digital systems engineered with precision, simplicity, and world-class craftsmanship." />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Build Less. Achieve More.</h1>
              <p>Digital systems engineered with precision, simplicity, and world-class craftsmanship.</p>
              <div className="hero-cta">
                <Link href="/contact" className="btn btn-primary">Start Your Project</Link>
                <Link href="/work" className="btn btn-secondary">View Our Work</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)', padding: '2rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>
              <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Trusted by forward-thinking companies
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities Preview */}
        <section className="section">
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>
              What We Do
            </h2>
            <div className="grid grid-3">
              <div className="card">
                <h3>Web Experiences</h3>
                <p>Ultra-premium websites and web applications built with modern frameworks and pixel-perfect design.</p>
              </div>
              <div className="card">
                <h3>Brand Identity</h3>
                <p>Complete brand systems including logos, color palettes, typography, and comprehensive guidelines.</p>
              </div>
              <div className="card">
                <h3>AI & Automation</h3>
                <p>Intelligent automation solutions that streamline workflows and enhance productivity.</p>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-md)' }}>
              <Link href="/capabilities" className="btn btn-secondary">View All Capabilities</Link>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>
              Featured Work
            </h2>
            <div className="grid grid-2">
              <div className="card">
                <img 
                  src="https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-17-43-078Z-f3d325b3-nano-banana-pro_1764803862973.jpg" 
                  alt="SaaS Dashboard" 
                  style={{ width: '100%', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-sm)' }} 
                />
                <h3>SaaS Dashboard</h3>
                <p>Complete redesign of enterprise analytics platform with 40% improvement in user engagement.</p>
                <Link href="/case/saas-dashboard" style={{ color: 'var(--color-accent)', marginTop: 'var(--spacing-sm)', display: 'inline-block' }}>
                  View Case Study →
                </Link>
              </div>
              <div className="card">
                <img 
                  src="https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-17-58-612Z-5f723e5d-nano-banana-pro_1764803878368.jpg" 
                  alt="Healthcare EMR" 
                  style={{ width: '100%', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-sm)' }} 
                />
                <h3>Healthcare EMR</h3>
                <p>Modern electronic medical records system serving 50+ clinics with HIPAA compliance.</p>
                <Link href="/case/clinic-emr" style={{ color: 'var(--color-accent)', marginTop: 'var(--spacing-sm)', display: 'inline-block' }}>
                  View Case Study →
                </Link>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-md)' }}>
              <Link href="/work" className="btn btn-primary">View All Work</Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>
              Ready to Build Something Exceptional?
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>
              Let's discuss your project and create something remarkable together.
            </p>
            <Link href="/contact" className="btn btn-primary">Get Started</Link>
          </div>
        </section>
      </main>
    </>
  )
}