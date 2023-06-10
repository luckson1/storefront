import { trackAddToCart } from "@lib/util/facebook"
import CartTemplate from "@modules/cart/templates"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { ReactElement, useEffect } from "react"
import { NextPageWithLayout } from "types/global"

const Cart: NextPageWithLayout = () => {
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('806579787480746')// facebookPixelId
        ReactPixel.pageView()
        ReactPixel.track('AddToCart')

  
      })
  }, [])
  return (
    <>
      <Head title="Shopping Bag" description="View your shopping bag" />
      <CartTemplate />
    </>
  )
}

Cart.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Cart
