'use client'

import Footer from "../shared/footer";
import { useRouterContext } from "../providers/routerProvider";

const Rules = () => {

  const { router } = useRouterContext();

  return (
    <main className="max-w-[432px] mx-auto my-0 text-white py-[5px] mt-[30px]">
      <div className={`${router == '/rules' && 'animate-fadeEffect'} flex flex-col justify-center items-center`}>
        <h3 className="text-white text-[35px] font-medium mb-1">Rules Mining MVH</h3>
        <div className="w-[370px] h-[600px] bg-[#352F4D] rounded-[20px]"></div>
        <Footer />
      </div>
    </main>
  )
}

export default Rules;