'use client'

import Footer from "../shared/footer";
import Image from "next/image";
import { useRouterContext } from "../providers/routerProvider";
import { useState, useEffect } from "react";   

const Account = () => {

  const { router, setRouter } = useRouterContext();
  const [wallet, setWallet] = useState('');

  return (
    <main className="max-w-[432px] mx-auto my-0 text-white py-[5px] mt-[30px]">
      <div className={`${router == '/account' && 'animate-fadeEffect'} flex flex-col justify-center items-center `}>
        <h3 className="text-white text-[35px] font-medium mb-1 mb-4">Your Account</h3>
        <Image src="/user_icon 1.png" width={130} height={130} alt="Avartar" />
        <p className="text-[#F076EB] text-[23px] font-medium mb-6 mt-5">@username</p>
        <section className="flex flex-col justify-center items-center w-[380px] h-[50px] bg-[#352F4D] rounded-[20px] mb-3">
          <div className="flex justify-between items-center w-full px-5">
            <Image src="/Twitter Logo.png" width={30} height={30} alt="Twitter logo" />
            <p className="text-[13px] font-medium">Link X (twitter) connect your Account </p>
            <Image src="/Layer 2.png" width={29} height={29} alt="Arrow" />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-[380px] h-[111px] bg-[#352F4D] rounded-[20px] mb-[30px]">
          <p className="text-[12px] font-medium text-center px-8 mb-3">Please enter your ETH wallet address for MVH withdrawal ( It is specified only once and cannot be changed).</p>
          <div className="flex justify-between items-center w-full px-5">
            <Image src="/blockchain_ethereum_icon 1.png" width={27} height={45} alt="Twitter logo" />
            <input
              className="w-[211px] h-[25px] bg-[#C4C1C1] outline-0 placeholder:text-[#646363] text-[11px] font-medium text-black rounded-[15px] px-[20px]" 
              placeholder="Enter your ETH wallet address"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}/>
            <Image src="/Layer 2.png" width={29} height={29} alt="Arrow" />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-[380px] h-[50px] bg-[#352F4D] rounded-[20px] mb-4">
          <div className="flex justify-between items-center w-full px-5">
            <Image src="/support_help_icon 1.png" width={35} height={35} alt="Twitter logo" />
            <p className="text-[13px] font-medium">Contact Support </p>
            <Image src="/Layer 2.png" width={29} height={29} alt="Arrow" />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-[380px] h-[50px] bg-[#352F4D] rounded-[20px] mb-4">
          <button className="flex justify-between items-center w-full px-5" onClick={() => setRouter('/rules')}>
            <Image src="/Group.png" width={32} height={38} alt="Twitter logo" />
            <p className="text-[13px] font-medium">Rules Mining MVH</p>
            <Image src="/Layer 2.png" width={29} height={29} alt="Arrow" />
          </button>
        </section>
        <p className="text-[#C0BEBE] text-[15px] font-medium text-center">For registration you receive</p>
        <p className="text-[#C0BEBE] text-[15px] font-medium text-center">the first MVH bonus to your balance.</p>
        <Footer />
      </div>
    </main>
  )
}

export default Account;