import Alert from "@modules/common/icons/alert"

const PaymentTest = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-x-2 bg-yellow-100 w-full p-2">
        <Alert size={16} className="text-yellow-700" />
        <span className="text-small-regular text-yellow-700">
          <span className="font-semibold">Payment on Delivery:</span> You will be asked to pay before collecting the product. 
        </span>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-lg text-slate-700 font-semibold">You will pay to the following till number:</p>
     <span className="text-sm">
     <span className="font-semibold ">Till Number : </span> 5847963
     </span>
     <span className="text-sm">
        <span className="font-semibold">Name: </span> Excel Collection
</span>
      </div>
    </div>
  )
}

export default PaymentTest
