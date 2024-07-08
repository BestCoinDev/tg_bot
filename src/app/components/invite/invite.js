'use client'

import Footer from "../shared/footer";
import Image from "next/image";
import Friend from "./friend";

const Invite = () => {
  return (
    <main className="flex flex-col justify-center items-center max-w-[432px] mx-auto my-0 text-white py-[5px] mt-[30px]">
      <h3 className="text-white text-[35px] font-medium mb-1">Friends Invite</h3>
      <p className="text-[12px] font-medium mb-5">Available for an invite 
        <span className="text-[#F9D34E] font-black"> 12 MVH</span> for crediting to your balance.
      </p>
      <section className="w-[380px] h-[110px] bg-gradient-to-l from-[#0ED2ED] to-[#BF0BFF] p-[1px] rounded-[20px] mb-3">
        <button className="w-full h-full bg-[#352F4D] rounded-[20px] px-3">
          <div className="flex justify-between items-center">
            <Image src="/present_prize_icon 1.png" width={62} height={77} alt="Gift" />
            <div className="flex flex-col">
              <p className="text-[#20F5A9] text-[15px] font-medium">Invite a friend get a gift:</p>
              <p className="text-[#F8DD7D] text-[12px] font-medium mb-1">Click to get your Prize!</p>
              <p className="flex items-center text-[10px] font-medium mb-2">
                <Image src="/Money1.png" width={20} height={20} alt="Money" className="mr-1" />
                <span className="text-[#E88FF0] font-bold mr-1">0.5 MVH</span> your prize when you first register.
              </p>
              <p className="flex items-center text-[10px] font-medium">
                <Image src="/Money2.png" width={20} height={20} alt="Money" className="mr-1" />
                <span className="text-[#F37D7D] font-bold mr-1">0.5 MVH</span> your prize if you invite a friend.
              </p>
            </div>
            <Image src="/Arrow1.png" width={45} height={45} alt="Arrow" />
          </div>
        </button>
      </section>
      <section className="w-[380px] h-[130px] bg-gradient-to-l from-[#0ED2ED] to-[#BF0BFF] p-[1px] rounded-[20px]">
        <button className="w-full h-full bg-[#352F4D] rounded-[20px] px-3">
          <p className="text-[#20F5A9] text-[15px] font-medium">Invite a friend with TG Premium get a gift:</p>
          <div className="flex justify-between items-center">
            <Image src="/present_icon 2.png" width={62} height={77} alt="Gift" />
            <div className="flex flex-col">
              <p className="text-[#F8DD7D] text-[12px] font-medium mb-1">Click to get your Prize!</p>
              <div className="flex items-center text-[10px] font-medium mb-2 ml-3">
                <Image src="/Money3.png" width={20} height={20} alt="Money" className="mr-1" />
                <p className="text-start"><span className="text-[#85EBA2] font-bold mr-1">0.5 MVH</span>your prize when you first register with your Premium TG account</p>
              </div>
              <div className="flex items-center text-[10px] font-medium mb-2 ml-3 mr-2">
                <Image src="/Money4.png" width={20} height={20} alt="Money" className="mr-1" />
                <p className="text-start"><span className="text-[#7DD6F3] font-bold mr-1">0.5 MVH</span>your prize if you invite a friend with a Premium TG account from a friend</p>
              </div>
            </div>
            <Image src="/Arrow1.png" width={45} height={45} alt="Arrow" />
          </div>
        </button>
      </section>
      <div className="w-[311px] flex justify-between items-center mt-3">
        <p className="w-[275px] h-[16px] bg-[#BFBABA] rounded-[15px] flex items-center justify-center">
          <span className="text-[10px] text-[#CE1EEB] font-medium">Your link to invite friends</span>
        </p>
        <button>
          <Image src="/copy.png" width={19} height={19} alt="Copy" />
        </button>
      </div>
      <div className="w-[311px] flex justify-between items-center mt-3 mb-3">
        <p className="text-[13px] font-bold">List of your friends: ( <span className="text-[#ECC129]">5</span> )</p>
        <button>
          <Image src="/repeat_circle_line_icon 1.png" width={20} height={20} alt="Repeat Circle" />
        </button>
      </div>
      <Friend src="/person.png" first="Johnny" last="Depp" status="Premium" />
      <Friend src="/person.png" first="James" last="Belushi" status="Standard" />
      <Friend src="/person.png" first="Chris" last="Evans" status="Standard" />
      <Friend src="/person.png" first="Harrison" last="Ford" status="Premium" />
      <Friend src="/person.png" first="Keanu" last="Reeves" status="Standard" />
      <Footer />
    </main>
  )
}

export default Invite;