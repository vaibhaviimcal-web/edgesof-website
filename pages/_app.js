import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <img src="/assets/logo-white.png" alt="Edgesof Solutions" />
        </Link>
        <ul className="nav-links">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/capabilities">Capabilities</Link></li>
          <li><Link href="/work">Work</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Edgesof Solutions Pvt Ltd. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
          Digital systems engineered with precision and world-class craftsmanship.
        </p>
      </div>
    </footer>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}