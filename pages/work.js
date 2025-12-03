import Head from 'next/head'
import Link from 'next/link'

export default function Work() {
  const projects = [
    {
      slug: 'krofta',
      title: 'Krofta Corporate Website',
      category: 'Web Experience',
      description: 'Premium corporate website redesign for a leading industrial solutions provider.',
      image: '/assets/case-krofta.png',
      tags: ['Web Design', 'Brand Identity', 'Next.js']
    },
    {
      slug: 'clinic-emr',
      title: 'Healthcare EMR System',
      category: 'Custom Software',
      description: 'Modern electronic medical records platform serving 50+ clinics.',
      image: '/assets/case-emr.jpg',
      tags: ['Healthcare', 'EMR', 'HIPAA Compliance']
    },
    {
      slug: 'saas-dashboard',
      title: 'SaaS Analytics Dashboard',
      category: 'Web Application',
      description: 'Complete redesign of enterprise analytics platform with 40% engagement boost.',
      image: '/assets/hero-mockup.jpg',
      tags: ['SaaS', 'Dashboard', 'Analytics']
    }
  ]

  return (
    <>
      <Head>
        <title>Work - Edgesof Solutions</title>
        <meta name="description" content="Explore our portfolio of web experiences, custom software, and digital systems." />
      </Head>

      <main style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-md)' }}>
              Our Work
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
              A selection of projects that showcase our approach to building exceptional digital systems.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ gap: 'var(--spacing-lg)' }}>
              {projects.map((project, index) => (
                <Link href={`/case/${project.slug}`} key={index}>
                  <div className="card" style={{ cursor: 'pointer' }}>
                    <div style={{ 
                      width: '100%', 
                      height: '300px', 
                      background: 'var(--color-bg)',
                      borderRadius: 'var(--border-radius)',
                      marginBottom: 'var(--spacing-sm)',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--color-accent)', 
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '0.5rem'
                    }}>
                      {project.category}
                    </div>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>
                      {project.title}
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-sm)' }}>
                      {project.description}
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          style={{
                            fontSize: '0.85rem',
                            padding: '0.25rem 0.75rem',
                            background: 'rgba(26, 115, 232, 0.1)',
                            color: 'var(--color-accent)',
                            borderRadius: '4px'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div style={{ 
                      marginTop: 'var(--spacing-sm)', 
                      color: 'var(--color-accent)',
                      fontWeight: 600
                    }}>
                      View Case Study →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>
              Let's Create Your Success Story
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}>
              Ready to build something exceptional? We'd love to discuss your project.
            </p>
            <Link href="/contact" className="btn btn-primary">Start Your Project</Link>
          </div>
        </section>
      </main>
    </>
  )
}