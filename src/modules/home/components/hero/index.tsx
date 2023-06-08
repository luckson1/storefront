import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
        Home Bliss Delivered: Elevate Your Everyday!
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
        From kitchen miracles to bedroom wonders, we have got the goods that turn your house into a haven. Shop our top-tier essentials and let the magic unfold in every room. Experience home bliss like never before – start shopping now and thank us later!
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <Image
        src="https://res.cloudinary.com/dhciks96e/image/upload/v1686264507/jimmy-dean-Yl7Y8DhyzyY-unsplash_uwfh3p.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="house hold goods"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
