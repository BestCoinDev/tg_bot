'use client'

import Footer from "../shared/footer";
import { useRouterContext } from "../providers/routerProvider";
import Image from "next/image";
import { formatNumber } from "../shared/functions";
import { useState } from "react";

const PreSale = () => {

  const { router } = useRouterContext();
  const [mvh, setMvh] = useState("");

  return (
    <main className="max-w-[432px] mx-auto my-0 text-white py-[5px] mt-[30px]">
      <div className={`${router == '/pre-sale' && 'animate-fadeEffect'} flex flex-col justify-center items-center`}>
        <h3 className="text-white text-[35px] font-medium mb-1">
          <span className="text-[#2AE85F]">Pre</span>-
          <span className="text-[#2AE85F]">Sale </span>
          <span className="text-[#F575E8]">MVH</span>
        </h3>
        <p className="text-[#8A8888] text-[15px] font-medium">Your Pre-Sale balance MVH:</p>
        <div className="flex items-center gap-9">
          <Image src="/MVH logo.png" width={50} height={50} alt="MVH logo" />
          <p className="text-[40px] font-medium">300.000</p>
        </div>
        <p className="text-[13px] font-medium">Application to buy <span className="text-[#F575E8]">MVH</span> in the</p>
        <p className="text-[13px] font-medium mb-4"><span className="text-[#F575E8]">1st round</span> of Pre-Sale at a price of <span className="text-[#E3F149]">0.1 usdt</span>.</p>
        <p className="text-[13px] font-medium text-[#CAC6C6]">Total amount of MVH available for sale in</p>
        <p className="text-[13px] font-medium text-[#CAC6C6]">this  round of Pre-Sale:</p>
        <p className="text-[#B0F0B7] text-[23px] font-medium mb-2">{formatNumber(1000000)}</p>
        
        <section className="w-[350px] h-[170px] bg-gradient-to-l from-[#910F0F] to-[#F71A1A] p-[1px] rounded-[20px]">
          <div className="flex flex-col justify-center items-center w-full h-full bg-[#352F4D] rounded-[20px]">
            <p className="text-center text-[15px] font-medium mb-4">Enter the amount MVH to buy:</p>
            <div className="flex justify-between items-center w-full  px-5">
              <Image src="/amount.png" width={44} height={38} alt="Amount icon" />
              <div className="flex flex-col justify-between items-center ">
                <p className="text-[#1BCABF] text-[10px] font-medium">Min. Purchase MVH: <span className="font-bold text-[#FAE62B]">{formatNumber(3000)}</span></p>
                <p className="text-[#F2B073] text-[10px] font-medium mb-5">Max. Purchase MVH: <span className="font-bold text-[#D076FA]">{formatNumber(50000)}</span></p>
                <input 
                  className="w-[167px] h-[30px] bg-[#B4B3B3] placeholder:text-[#545454] rounded-[15px] text-black text-[10px] font-medium text-center px-3 outline-0"
                  placeholder="Enter quantity MVH"
                  value={mvh}
                  onChange={(e) => setMvh(e.target.value)}
                  />
                <p className="text-[#1BCABF] text-[10px] font-medium mt-3">Pre-Sale round: <span className="font-bold text-[#FAE62B]">ACTIVE</span></p>
              </div>
              <Image src="/Layer 2.png" width={30} height={30} alt="Arrow" />
            </div>
          </div>
        </section>
        <p className="text-[#C6C2C2] text-[12px] font-medium my-2">Reward program for purchasing MVH using your personal link.</p>
        <section className="w-[350px] h-[130px] bg-gradient-to-b from-[#4388F0] to-[#0E8973] p-[1px] rounded-[20px] mb-2">
          <div className="flex flex-col justify-center items-center gap-2 w-full h-full bg-[#352F4D] rounded-[20px]">
            <p className="text-[13px] font-medium text-center">Reward program <span className="text-[#F7EE12]">3%</span> : </p>
            <div className="flex flex-col justify-center items-center pl-5 pr-7 w-full">
              <div className="flex justify-between items-center w-full mb-2">
                <p className="text-[#2FC3F2] text-[12px] font-medium">Total of your users purchased MVH:</p>
                <p className="flex flex-col justify-center items-center w-[103px] h-[17px] bg-[#B4B3B3] rounded-[15px] text-[#EF0D0D]">7</p>
              </div>
              <div className="flex w-full">
                <p className="text-[#E2CC59] text-[12px] font-medium">Total rewards paid in:</p>
                <div className="flex flex-col grow justify-between ml-2 gap-1">
                  <div className="flex w-full justify-between">
                    <p className="flex flex-col justify-center items-center text-[12px] font-medium w-[83px] h-[17px] bg-[#B4B3B3] text-[#5B396F] rounded-[15px]">355 usdt</p>
                    <p className="flex flex-col justify-center items-center text-[12px] font-medium w-[83px] h-[17px] bg-[#B4B3B3] text-[#5B396F] rounded-[15px]">123 matic</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="flex flex-col justify-center items-center text-[12px] font-medium w-[83px] h-[17px] bg-[#B4B3B3] text-[#5B396F] rounded-[15px]">0.053 eth</p>
                    <p className="flex flex-col justify-center items-center text-[12px] font-medium w-[83px] h-[17px] bg-[#B4B3B3] text-[#5B396F] rounded-[15px]">10 usdc</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p className="flex flex-col justify-center items-center text-[12px] font-medium w-[83px] h-[17px] bg-[#B4B3B3] text-[#5B396F] rounded-[15px]">35 ton</p>
                    <p className="flex flex-col justify-center items-center text-[12px] font-medium w-[83px] h-[17px] bg-[#B4B3B3] text-[#5B396F] rounded-[15px]">0.007 bnb</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <p className="text-[11px] font-medium">You can pay using supported networks</p>
        <p className="text-[11px] font-medium">(Ethereum, BNB Smart Chain, Avalanche C-Chain, Polygon)</p>
        <p className="text-[11px] font-medium">and cryptocurrencies</p>
        <p className="text-[11px] font-medium">(ETH, USDT, MATIC, TON, USDC, BNB, BUSD).</p>
        <p className="text-[11px] font-medium">For payment, you can connect any of the wallets</p>
        <p className="text-[11px] font-medium">(MetaMask, Trast Walet, Binance Wallet).</p>
        <Footer />
      </div>
    </main>
  )
}

export default PreSale;