import { trackPurchase } from "@lib/util/facebook";
import CheckoutTemplate from "@modules/checkout/templates"
import Head from "@modules/common/components/head"
import { useEffect } from "react";

const Checkout = () => {
  
  return (
    <>
      <Head title="Checkout" />
      <CheckoutTemplate />
    </>
  )
}

export default Checkout
