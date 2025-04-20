import { useEffect, useState } from "react"
import { loadStripe, Stripe} from "@stripe/stripe-js"


const useStripe = () => {
  const [stripe, setStripe] = useState<Stripe | null>(null)


  useEffect(() => { 
    const getStripe = async () => {
      const stripeInstance = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!)
    }

    getStripe()
  }, [])


  const createPaymentStripeCheckout = async ( stripeData : { testeId: string }) => {
    if(!stripe) {
      return
    }

    try {

      const response = await fetch("/api/stripe/create-payment-checkout", {
        method: "POST",
       
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(stripeData)
        
      })

      const data = await response.json()

      await stripe.redirectToCheckout({
        sessionId: data.id
      })

    } catch (error) {
    }
  }

  const createSubscriptionStripeCheckout = async (checkoutData: { testeId: string }) =>{
    if (!stripe) return;

    try {
      const response = await fetch("/api/stripe/create-subscription-checkout", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkoutData),
      })

      const data = await response.json();

      await stripe.redirectToCheckout({ sessionId: data.id })
    } catch (error) {
      console.error(error);
    }
  }

  const handleCreateStripePortal = async () => {
    const response = await fetch("/api/stripe/create-portal", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json();

    window.location.href = data.url;
  }

  
  return {
    createPaymentStripeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  }

}

export { useStripe }