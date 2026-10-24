import { useAppSelector } from "@/lib/hooks";
import { ShieldCheck, ArrowRight, Tag } from "lucide-react";

export default function OrderSummary() {
  
  const total = useAppSelector((state) => state.cart.total)

  return (
    <div className=" rounded-2xl border border-violet-100 bg-secondary p-5 shadow-sm md:p-6 m-3">
      <h2 className="text-lg font-semibold text-slate-900">Order Summary</h2>
      <div className="mt-5 flex flex-col gap-2 text-sm ">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span className="font-medium text-slate-800">₹{total}</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span className="flex items-center gap-2"><Tag size={15} className="text-red-500" />Discount</span>
          <span className="font-medium text-red-500">- ₹0</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Delivery Fee</span>
          <span className="font-medium text-slate-800">Free</span>
        </div>
      </div>
      <div className="my-5 border-t border border-violet-200" />
      <div className="flex items-center justify-between">
        <span className="font-semibold text-slate-900">Total</span>
        <span className="text-xl font-bold text-primary">₹{total}</span>
      </div>
      <button className="bg-primary  text-white w-full mt-5 rounded-full text-sm py-2">Proceed to Checkout</button>
      <div className="mt-4 flex items-center gap-3 rounded-xl bg-violet-50 p-3">
    <ShieldCheck size={23} className="shrink-0 text-violet-600" />
    <div>
      <p className="text-sm font-medium text-slate-800">
        Secure Checkout
      </p>
      <p className="text-xs text-slate-500">
        Your information is safe with us.
      </p>
    </div>
  </div>
    </div>
  );
}