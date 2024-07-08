
import Image from "next/image";

const Action = ({ src, width, height, desc }) => {
  return (
    <section className="w-[380px] h-[55px] bg-gradient-to-l from-[#18667E] to-[#18BFF4] p-[1px] rounded-[15px] mb-3">
      <div className="flex flex-col justify-center items-center w-full h-full bg-[#352F4D] rounded-[15px]">
        <div className="flex justify-between items-center w-full px-3">
          <div className="flex items-center">
            <Image src={src} width={width} height={height} alt={src} />
            <p className="text-[13px] font-medium ml-4">{desc}</p>
          </div>
          <Image src="/Layer 2.png" width={30} height={30} alt="Arrow" />
        </div>
      </div>
    </section>
  );
}

export default Action;