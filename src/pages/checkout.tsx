import { trackPurchase } from "@lib/util/facebook";
import CheckoutTemplate from "@modules/checkout/templates"
import Head from "@modules/common/components/head"
import { useEffect } from "react";

const Checkout = () => {
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('806579787480746')// facebookPixelId
        ReactPixel.pageView()
        ReactPixel.track('Purchase', {
          value: 5000,
          currency: "KES",
        });

  
      })
  }, [])
  return (
    <>
      <Head title="Checkout" />
      <CheckoutTemplate />
    </>
  )
}

export default Checkout
