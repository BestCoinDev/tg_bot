'use client'

import Footer from "../shared/footer";
import Image from "next/image";
import { useRouterContext } from '../providers/routerProvider';

const Boost = () => {

  const { setRouter } = useRouterContext();

  return (
    <main className="flex flex-col justify-center items-center max-w-[432px] mx-auto my-0 text-white py-[5px] mt-[30px]">
      <h3 className="text-white text-[35px] font-medium">Boost</h3>
      <section className="flex items-center mb-5 w-full ml-[50px]">
        <Image src="/MVH logo.png" width={90} height={90} className="mr-3" alt="MVH logo" />
        <div className="flex flex-col">
          <p className="text-[#F9D61B] text-[18px] font-medium ml-5">Your Balance</p>
          <p className="text-[45px] font-medium">105.75241</p>
          <p className="text-[15px] font-medium ml-5">0.01 <span className="text-[#E974F3]">MVH</span> / 1 hour</p>
        </div>
      </section>
      <section className="w-[380px] h-[120px] bg-gradient-to-r from-[#1DB89C] to-[#D5F223] p-[1px] rounded-[20px] mb-2">
        <div className="flex justify-between items-center w-full h-full bg-[#352F4D] rounded-[20px] px-4">
          <Image src="/Timing.png" width={63} height={90} alt="Timing" />
          <div className="flex flex-col">
            <p className="text-[#F5D62F] text-[28px] font-medium">Mining Time</p>
            <p className="text-[15px] font-medium">Increase the mining time:</p>
            <div className="flex items-center">
              <Image src="/MVH logo.png" width={40} height={40} className="mr-2" alt="MVH logo" />
              <p className="text-[14px] font-medium">L1 - 6 hour / 7 days</p>
            </div>
          </div>
          <Image src="/Layer 2.png" width={42} height={42} alt="Arrow" />
        </div>
      </section>
      <section className="w-[380px] h-[120px] bg-gradient-to-r from-[#1D77B8] to-[#23F2C0] p-[1px] rounded-[20px] mb-2">
        <div className="flex justify-between items-center w-full h-full bg-[#352F4D] rounded-[20px] px-4">
          <Image src="/Timing.png" width={63} height={90} alt="Timing" />
          <div className="flex flex-col">
            <p className="text-[#2FD2F5] text-[28px] font-medium">Mining Time</p>
            <p className="text-[15px] font-medium">Increase the mining time:</p>
            <div className="flex items-center">
              <Image src="/MVH logo.png" width={40} height={40} className="mr-2" alt="MVH logo" />
              <p className="text-[14px] font-medium">L2 - 12 hour / 7 days</p>
            </div>
          </div>
          <Image src="/Layer 2.png" width={42} height={42} alt="Arrow" />
        </div>
      </section>
      <section className="w-[380px] h-[120px] bg-gradient-to-r from-[#F51A1A] to-[#B807C7] p-[1px] rounded-[20px] mb-2">
        <div className="flex justify-between items-center w-full h-full bg-[#352F4D] rounded-[20px] px-4">
          <Image src="/Power.png" width={83} height={83} alt="Power" />
          <div className="flex flex-col">
            <p className="text-[#F766C6] text-[28px] font-medium">Mining Power</p>
            <p className="text-[15px] font-medium">Increase mining power:</p>
            <div className="flex items-center">
              <Image src="/MVH logo.png" width={40} height={40} className="mr-2" alt="MVH logo" />
              <p className="text-[14px] font-medium">L3 - 0.04 MVH / hour</p>
            </div>
          </div>
          <Image src="/Layer 2.png" width={42} height={42} alt="Arrow" />
        </div>
      </section>
      <section className="w-[380px] h-[120px] bg-gradient-to-r from-[#0B07C7] to-[#F51A35] p-[1px] rounded-[20px]">
        <button className="flex justify-between items-center w-full h-full bg-[#352F4D] rounded-[20px] px-4" onClick={() => setRouter("/missions")}>
          <Image src="/MVH logo.png" width={60} height={60} alt="MVH logo" />
          <div className="flex flex-col">
            <p className="text-[#1DE0D4] text-[28px] font-medium text-center">Missions</p>
            <p className="text-[13px] font-medium">Complete Missions and get MVH</p>
          </div>
          <Image src="/Layer 2.png" width={42} height={42} alt="Arrow" />
        </button>
      </section>
      <Footer />
    </main>
  )
}

export default Boost;