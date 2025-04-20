import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

  const { testeId, userEmail } = await request.json()

  const price = process.env.STRIPE_PRODUCT_PRICE_ID;

  if (!price) {
    return NextResponse.json({ error: "Price not found" }, { status: 500 });
  }

  const metadata = {
    testeId,
    price,
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card', 'boleto'],
      line_items: [{ price, quantity: 1 }],
      success_url: `${request.headers.get('origin')}/success`,
      cancel_url: `${request.headers.get('origin')}/`,
      ...(userEmail && { customer_email: userEmail }),
      metadata,
    })

  }catch (error) {
    console.log(error)
    NextResponse.error()
  }

}