// pages/cancel.js
import Head from 'next/head'
import Link from 'next/link'

export default function Cancel() {
  return (
    <>
      <Head>
        <title>Purchase Canceled – EPIC TECH AI OS</title>
      </Head>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#f0f2f5',
        textAlign: 'center',
        padding: '2rem',
        fontFamily: 'system-ui'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Purchase Canceled
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          You have not been charged and your account remains unchanged.
        </p>
        <Link href="/">
          <a style={{
            padding: '1rem 2rem',
            fontSize: '1rem',
            background: '#007BFF',
            color: '#fff',
            borderRadius: '5px',
            textDecoration: 'none'
          }}>
            Return Home
          </a>
        </Link>
      </main>
    </>
  )
}
