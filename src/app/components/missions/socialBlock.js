
import Image from "next/image";
import { useState } from "react";

const SocialBlock = ({ src, desc, width, height, first, second }) => {

  const [user, setUser] = useState('');
  const [link, setLink] = useState('');

  return (
    <section className="mb-3">
      <div className="w-[380px] h-[55px] bg-gradient-to-l from-[#18667E] to-[#18BFF4] p-[1px] rounded-[15px] mb-3">
        <button className="flex flex-col justify-center items-center w-full h-full bg-[#352F4D] rounded-[15px] pl-3 pr-5 mb-3">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              <Image src={src} width={width} height={height} alt={src} />
              <p className={`text-[${src == "/telegram.png" ? "11px" : "13px"}] font-medium ml-4`}>{desc}</p>
            </div>
            <Image src="/Arrow2.png" width={30} height={30} alt="Arrow" />
          </div>
        </button>
      </div>
      <div className="flex justify-between items-center px-2">
        <input
          className="w-[140px] h-[21px] outline-0 text-black text-[12px] font-medium bg-[#BFC0C5] placeholder:text-[#7D7B81] px-2 rounded-[15px]"
          placeholder={first}
          value={user}
          onChange={(e) => setUser(e.target.value)} />
        <input
          className={`w-[210px] h-[21px] outline-0 text-black text-[${src == "/telegram.png" ? "11px] px-1" : "12px] px-3"} font-medium bg-[#BFC0C5] placeholder:text-[#7D7B81] rounded-[15px]`}
          placeholder={second}
          value={link}
          onChange={(e) => setLink(e.target.value)} />
      </div>

    </section>
  )
}

export default SocialBlock;