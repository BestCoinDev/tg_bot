'use client'

import Footer from "../shared/footer";
import Action from "./action";
import Image from "next/image";
import { useRouterContext } from "../providers/routerProvider";

const Earn = () => {

  const { setRouter } = useRouterContext();

  return (
    <main className="flex flex-col justify-center items-center max-w-[432px] mx-auto my-0 text-white py-[5px] mt-[30px]">
      <h3 className="text-white text-[35px] font-medium mb-1">Earn</h3>
      <section className="flex flex-col justify-center items-center mb-5">
        <Image src="/Mining 3 1.png" width={100} height={100} alt="Mining" />
        <p className="text-[#57D14C] text-[25px] font-medium mb-5 mt-2">Earn & Mining MovieCash:</p>
        <p className="text-[13px] font-medium">Click on the buttons with Missions in Cinemadrom Ecosystem.</p>
        <p className="text-[13px] font-medium">Earn extra MovieCash (MVH) tokens.</p>
      </section>
      <button onClick={() => setRouter('/friends')}>
        <Action src="/hand.png" width={61} height={34} desc="PARTNER (invite a friend) - 0.5 MVH" />
      </button>
      <Action src="/NFT market Logo.png" width={45} height={45} desc="NFT MARKET (NFT purchase) - 10 MVH" />
      <button onClick={() => setRouter('/missions')}>
        <Action src="/Like Logo.png" width={45} height={45} desc="MISSIONS on Social Networks - 0.4 MVH" />
      </button>
      <Action src="/arrow.png" width={45} height={45} desc="Other Missions" />
      <Action src="/arrow.png" width={45} height={45} desc="Other Missions" />
      <Action src="/arrow.png" width={45} height={45} desc="Other Missions" />
      <Footer />
    </main>
  )
}

export default Earn;