// pages/api/verify.js
import { stripe } from '../../lib/stripe'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

export default async function handler(req, res) {
  const { session_id } = req.query
  if (!session_id) {
    return res.status(400).json({ error: 'Missing session_id' })
  }

  // Retrieve the Checkout Session from Stripe
  let session
  try {
    session = await stripe.checkout.sessions.retrieve(session_id)
  } catch (err) {
    return res.status(500).json({ error: 'Stripe API error' })
  }

  // Only proceed if payment succeeded
  if (session.payment_status !== 'paid') {
    return res.status(400).json({ error: 'Payment not completed' })
  }

  // Create a JWT for this customer
  const token = jwt.sign(
    { sub: session.customer, email: session.customer_email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )

  // Set it as an HTTP-only cookie
  res.setHeader('Set-Cookie', cookie.serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60
  }))

  // Done
  res.status(200).json({ success: true })
}
