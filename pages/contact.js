import Head from 'next/head'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! We\'ll get back to you within 24 hours.' 
        })
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus({ 
          type: 'error', 
          message: data.error || 'Something went wrong. Please try again.' 
        })
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>Contact - Edgesof Solutions</title>
        <meta name="description" content="Get in touch with Edgesof Solutions to discuss your project." />
      </Head>

      <main style={{ paddingTop: '80px' }}>
        {/* Hero */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-md)' }}>
              Let's Build Together
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
              Ready to create something exceptional? Share your project details and we'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section">
          <div className="container" style={{ maxWidth: '600px' }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@company.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name (optional)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project, timeline, and budget..."
                />
              </div>

              {status.message && (
                <div style={{
                  padding: 'var(--spacing-sm)',
                  borderRadius: 'var(--border-radius)',
                  marginBottom: 'var(--spacing-sm)',
                  background: status.type === 'success' 
                    ? 'rgba(26, 115, 232, 0.1)' 
                    : 'rgba(220, 38, 38, 0.1)',
                  color: status.type === 'success' 
                    ? 'var(--color-accent)' 
                    : '#ef4444',
                  border: `1px solid ${status.type === 'success' 
                    ? 'var(--color-accent)' 
                    : '#ef4444'}`
                }}>
                  {status.message}
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isSubmitting}
                style={{ 
                  width: '100%',
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>
              Other Ways to Reach Us
            </h2>
            <div style={{ color: 'var(--color-text-secondary)', lineHeight: '2' }}>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@edgesof.com" style={{ color: 'var(--color-accent)' }}>
                  hello@edgesof.com
                </a>
              </p>
              <p style={{ marginTop: 'var(--spacing-sm)' }}>
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}