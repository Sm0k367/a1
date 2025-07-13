// pages/api/webhook.js
import getRawBody from 'raw-body'
import { stripe } from '../../lib/stripe'

export const config = {
  api: { bodyParser: false }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method Not Allowed')
  }

  const sig = req.headers['stripe-signature']
  const buf = await getRawBody(req)

  let event
  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('⚠️  Webhook signature verification failed.', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  // Handle the event type(s) you care about
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object
      console.log(`🔔  Checkout session completed: ${session.id}`)
      // You could create/activate user record here
      break
    case 'invoice.payment_failed':
      console.log(`🔔  Invoice payment failed: ${event.data.object.id}`)
      break
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  res.status(200).json({ received: true })
}
