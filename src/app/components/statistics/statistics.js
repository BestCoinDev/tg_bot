'use client'

import Footer from "../shared/footer";
import Image from "next/image";
import { formatNumber } from "../shared/functions";

const Statistics = () => {  

  return (
    <main className="flex flex-col justify-center items-center max-w-[432px] mx-auto my-0 text-white py-[5px] mt-[30px]">
      <h3 className="text-white text-[35px] font-medium mb-1">Statistics Mining</h3>
      <p className="text-[#8A8888] text-[17px] font-medium pl-9">Total share balance MVH:</p>
      <div className="flex items-center gap-5 mb-3">
        <Image src="/MVH logo.png" width={50} height={50} alt="MVH logo" />
        <p className="text-[40px] font-medium">105.75241</p>
      </div>
      <section className="w-[290px] h-[380px] bg-gradient-to-l from-[#7014E5] to-[#ED2C2C] p-[1px] rounded-[20px] mb-3">
        <div className="flex flex-col justify-between items-center w-full h-full bg-[#352F4D] rounded-[20px] py-3">
          <p className="text-[#8A8888] text-[15px] font-medium">Total offer for mining MVH:</p>
          <p className="text-[#55B7FE] text-[20px] font-black">{formatNumber(21000000)}</p>

          <p className="text-[#8A8888] text-[15px] font-medium">Total offer for Mission & Invate MVH:</p>
          <p className="text-[#55B7FE] text-[20px] font-black">{formatNumber(1300000)}</p>

          <p className="w-[90%] h-[1px] bg-[#F869AD]"></p>

          <p className="text-[#8A8888] text-[15px] font-medium">Free tokens left for mining MVH:</p>
          <p className="text-[#B3CA58] text-[20px] font-black">{formatNumber(20999895)}</p>

          <p className="text-[#8A8888] text-[14px] font-medium">Free tokens left for Mission & Invate MVH:</p>
          <p className="text-[#D09469] text-[20px] font-black">{formatNumber(1115732)}</p>

          <p className="text-[#8A8888] text-[15px] font-medium">Daily Users:</p>
          <p className="text-[#DC55FE] text-[20px] font-black">{formatNumber(10055)}</p>

          <p className="text-[#8A8888] text-[15px] font-medium">Online Mainers:</p>
          <p className="text-[#6FC59B] text-[20px] font-black">{formatNumber(7037)}</p>
        </div>
      </section>
      <section className="w-[185px] h-[35px] bg-gradient-to-l from-[#294988] to-[#25A39B] p-[1px] rounded-[10px] mb-3">
        <div className="flex justify-between items-center w-full h-full bg-[#352F4D] rounded-[10px] px-3">
          <Image src="/browser_earth_global_globe_internet_icon 1.png" width={30} height={30} alt="Internet icon" />
          <p className="text-[#24F1A7] text-[11px] font-medium">Official Website</p>
          <p className="w-[30px] h-[30px]"></p>
        </div>
      </section>
      <section className="w-[185px] h-[35px] bg-gradient-to-l from-[#25A39B] to-[#294988] p-[1px] rounded-[10px] mb-3">
        <div className="flex justify-between items-center w-full h-full bg-[#352F4D] rounded-[10px] px-3">
          <Image src="/certification_contract_document_pen_icon 1.png" width={30} height={30} alt="Document icon" />
          <p className="text-[#74C9F8] text-[11px] font-medium">Smart Contract MVH</p>
          <Image src="/Ethereum_x2C__crypto_x2C__cryptocurrency_1_.png" width={13} height={23} alt="Ethereum icon" />
        </div>
      </section>
      <p className="text-[#7A7A7A] text-[13px] font-medium text-center w-[225px]">Official listing price MovieCash (MVH) token on CEX / DEX = $7</p>
      <p className="text-[#7A7A7A] text-[13px] font-medium">Total supply MVH: 100,000,000</p>
      <Footer />
    </main>
  )
}

export default Statistics;