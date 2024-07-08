
import Image from "next/image";

const Friend = ({ src, first, last, status }) => {
  return (
    <section className="w-[310px] h-[41px] bg-gradient-to-l from-[#9037C7] to-[#12DCE9] p-[1px] rounded-[12px] mb-3">
      <div className="flex flex-col justify-center items-center w-full h-full bg-[#352F4D] rounded-[12px]">
        <button className="flex justify-between items-center w-full px-3">
          <div className="flex items-center">
            <Image src={src} width={30} height={30} alt="Avartar" />
            <p className="text-[#B0EC9B] text-[15px] font-medium ml-3 mr-1">{first}</p>
            <p className="text-[#9DC3FC] text-[15px] font-medium">{last}</p>
          </div>
          <div className="flex items-center">
            <p className="text-[#7E7E83] text-[10px] font-medium mr-3">
              (<span className={`${status == "Premium" ? "text-[#DE6FF0]" : "text-[#638D4A]"}`}>{status}</span> TG)
            </p>
            <Image src="/arrow_circle_icon 1.png" width={24} height={24} alt="Arrow" />
          </div>
        </button>
      </div>
    </section>
  );
}

export default Friend;