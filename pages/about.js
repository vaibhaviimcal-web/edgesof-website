import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Edgesof Solutions</title>
        <meta name="description" content="Learn about Edgesof Solutions and our mission to build exceptional digital systems." />
      </Head>

      <main style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-md)' }}>
              We Build Systems That Matter
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
              Edgesof Solutions exists to eliminate complexity and deliver digital systems that are powerful, elegant, and built to last.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>Our Story</h2>
            <div style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                We started with a simple observation: most digital products are over-engineered, bloated, and unnecessarily complex. Teams build features nobody uses. Interfaces confuse rather than clarify. Systems break under real-world pressure.
              </p>
              <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                We believe there's a better way. Every line of code should serve a purpose. Every pixel should communicate clearly. Every system should be resilient, maintainable, and delightful to use.
              </p>
              <p>
                That's why we exist: to build less, but build better. To create digital systems that solve real problems with precision, simplicity, and world-class craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>Why We Exist</h2>
            <div className="grid grid-2">
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-xs)', color: 'var(--color-accent)' }}>
                  Precision Over Volume
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  We don't chase feature lists. We build exactly what's needed, engineered to perfection.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-xs)', color: 'var(--color-accent)' }}>
                  Simplicity Over Complexity
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  The best solutions are often the simplest. We eliminate unnecessary complexity at every turn.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-xs)', color: 'var(--color-accent)' }}>
                  Craft Over Speed
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  We take the time to do things right. Quality compounds; shortcuts decay.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-xs)', color: 'var(--color-accent)' }}>
                  Impact Over Impressions
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  We measure success by real outcomes, not vanity metrics or flashy demos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>Our Team</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
              We're a small, focused team of designers, engineers, and strategists who care deeply about craft. Every member brings world-class expertise and an obsessive attention to detail.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We don't scale for the sake of scaling. We stay lean, move fast, and deliver exceptional work.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>
              Let's Build Together
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>
              Ready to create something exceptional? We'd love to hear about your project.
            </p>
            <Link href="/contact" className="btn btn-primary">Start a Conversation</Link>
          </div>
        </section>
      </main>
    </>
  )
}