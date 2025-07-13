// pages/success.js
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Success() {
  const router = useRouter()
  const { session_id } = router.query

  useEffect(() => {
    if (!session_id) return
    // Call our verify endpoint
    fetch(`/api/verify?session_id=${session_id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          router.replace('/dashboard')
        } else {
          router.replace('/')
        }
      })
      .catch(() => {
        router.replace('/')
      })
  }, [session_id, router])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui'
    }}>
      <p>Verifying your purchase… please wait.</p>
    </div>
  )
}
