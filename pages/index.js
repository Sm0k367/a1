// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>EPIC TECH AI OS</title>
        <meta name="description" content="AI-First OS in your browser" />
      </Head>

      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#f0f2f5',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          EPIC TECH AI OS
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Unlock your AI-First Operating System.<br/>
          7-day free trial, then $29.99/mo.
        </p>
        <button
          style={{
            padding: '1rem 2rem',
            fontSize: '1rem',
            background: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
          onClick={() => {
            window.location.href =
              'https://buy.stripe.com/3cI8wQgj74LI592cDM0Fi05'
          }}
        >
          Start Free Trial
        </button>
      </main>
    </>
  )
}
