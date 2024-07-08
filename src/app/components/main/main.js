'use client'

import Image from "next/image";
import Footer from "../shared/footer";
import { useRouterContext } from "../providers/routerProvider";

const Main = () => {

  const { setRouter } = useRouterContext();

  return (
    <main className="flex flex-col justify-center items-center max-w-[432px] mx-auto my-0 text-white py-[5px] mt-[30px]">
      <section className="w-[380px] h-[175px] bg-gradient-to-l from-[#F3B77E] to-[#9D7935] p-[1px] rounded-[15px]">
        <div className="flex flex-col justify-center items-center w-full h-full bg-gradient-to-r from-[#585977] to-[#272735] rounded-[15px]">
          <div className="flex justify-between items-start w-full px-2">
            <div className='flex items-center'>
              <Image src="/1.png" width={68} height={68} alt="AI movie" />
              <div className='pl-1'>
                <p className='text-[19px] font-semibold'>Hi, Adam Barlow</p>
                <p className='text-[15px] font-[200]'>Welcome Back!</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <button className='bg-[#D9D9D9] border-[#F5A4A4] border-2 p-[5px] rounded-[9px]' onClick={() => setRouter("/rules")}>
                <Image src="/Rules.png" width={35} height={35} alt="Rules" />
              </button>
              <button className='bg-[#D9D9D9] border-[#A9DD3C] border-2 p-[5px] rounded-[9px]' onClick={() => setRouter("/account")}>
                <Image src="/Vector.png" width={37} height={37} alt="Vector" />
              </button>
            </div>
          </div>
          <p className='flex items-start text-[15px] w-full font-medium pl-[57px]'>Total <span className='text-[#E974F3] px-2'>MVH</span> mining Balance:</p>
          <div className='flex justify-between items-center w-full px-3'>
            <div className='flex items-center'>
              <Image src="/MVH logo.png" width={60} height={60} alt="MVH logo" />
              <div className='pl-2'>
                <p className='text-[23px] font-black'>105.75241</p>
                <p className='text-[#F9DC46] text-[15px]'>= $740.25</p>
              </div>
            </div>
            <p className='bg-[#F7C08E] border-[#CB7334] border-2 px-[12px] py-[11px] rounded-[15px] text-black text-[17px] font-medium'>Withdraw</p>
          </div>
        </div>
      </section>
      <section className='w-[380px] flex justify-between pt-[10px]'>
        <Image src="/Baner 1.png" width={193} height={128} alt="Baner AI Movie" />
        <Image src="/Baner 2 NFT Movie.png" width={194} height={128} alt="Baner NFT Movie" />
      </section>
      <section className="w-[380px] h-[186px] relative grid mb-2">
        <div className='flex flex-col justify-between items-center z-20 pt-[15px] pb-[10px]'>
          <p className='text-[#F9D61B] text-[18px] font-medium'>100 % Filled in 1 hours</p>
          <div className='flex items-center justify-between w-full px-5'>
            <Image src="/MVH logo.png" width={60} height={60} alt="MVH logo" />
            <p className='font-medium text-[50px] leading-none'>0.01000</p>
            <div className='w-[60px] h-[60px]'></div>
          </div>
          <p className='font-light text-[15px]'>0.01 <span className='text-[#E974F3]'>MVH</span> / 1 hour</p>
          <div className='flex justify-between w-full px-2'>
            <button className='w-[85px] h-[35px] bg-[#F7C08E] border-[#CB7334] border-2 rounded-[15px] font-medium text-[18px] text-black' onClick={() => setRouter('/earn')}>Earn</button>
            <button className='w-[150px] h-[35px] bg-[#F7C08E] border-[#CB7334] border-2 rounded-[15px] font-medium text-[18px] text-black'>Claim</button>
            <button className='w-[85px] h-[35px] bg-[#F7C08E] border-[#CB7334] border-2 rounded-[15px] font-medium text-[18px] text-black' onClick={() => setRouter('/boost')}>Boost</button>
          </div>
        </div>
        <Image src="/Block Minings.png" width={380} height={168} className='absolute top-0 z-0' alt="Block Minings" />
      </section>
      <section className='w-[380px] h-[170px] bg-gradient-to-r from-[#9DF37E] to-[#15A9BD] p-[1px] rounded-[15px]'>
        <div className='w-full h-full bg-gradient-to-l from-[#667A85] to-[#192A37] rounded-[15px]'>
          <div className='w-full h-full flex justify-between items-center'>
            <div className='flex flex-col justify-between h-full py-3 pl-3'>
              <button 
                className='flex flex-col justify-center items-center text-[15px] font-medium text-black w-[75px] h-[68px] bg-[#F7C4EC] border-[#CB7334] border-2 rounded-[15px]'
                onClick={() => setRouter('/pre-sale')}>

                <Image src="/Sale.png" width={40} height={40} alt="Sale" />
                Pre-Sale
              </button>
              <button className='flex flex-col justify-center items-center text-[15px] font-medium text-black w-[75px] h-[68px] bg-[#70DBE2] border-[#3B6D2A] border-2 rounded-[15px]'>
                <Image src="/Announce.png" width={40} height={40} alt="Announce" />
                News
              </button>
            </div>
            <Image src="/Baner 4.png" width={285} height={150} alt="Banner 4" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Main;