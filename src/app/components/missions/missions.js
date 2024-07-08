'use client'

import Footer from "../shared/footer";
import Image from "next/image";
import SocialBlock from "./socialBlock";
import { useRouterContext } from "../providers/routerProvider";

const Missions = () => {

  const { router } = useRouterContext();

  return (
    <main className="max-w-[432px] mx-auto my-0 text-white py-[5px] mt-[30px]">
      <div className={`${router == '/missions' && 'animate-fadeEffect'} flex flex-col justify-center items-center`}>
        <h3 className="text-white text-[35px] font-medium mb-1">Missions</h3>
        <Image src="/logo CINEMADROM AI Movie (250x250) 1.png" width={100} height={100} alt="Cinemadrom Ai movie" />
        <p className="text-[#57D14C] text-[25px] font-medium mb-3 mt-2">CINEMADROM metaverse</p>
        <p className="text-[13px] font-regular">Perform Missions in Cinemadrom Social Networks:</p>
        <p className="text-[13px] font-regular">Subscribe, Like, Repost, Your Post. </p>
        <p className="text-[13px] font-regular mb-3">Get extra MovieCash (MVH) tokens.</p>
        <SocialBlock
          src="/Twitter Logo.png"
          width="30"
          height="30"
          desc="TWITTER (join, like, repost) - 0.1 MVH"
          first="Your @username in X"
          second="Link to your repost in X" />
        <SocialBlock
          src="/telegram.png"
          width="38"
          height="32"
          desc="TELEGRAM (repost in top crypto groups) - 0.1 MVH"
          first="Your @username in TG"
          second="Link to your repost in top crypto groups" />
        <SocialBlock
          src="/Youtube_1_.png"
          width="40"
          height="40"
          desc="YOUTUBE  (join, like, comments) - 0.1 MVH"
          first="Your @username in YT"
          second="Link to your Comments" />
        <SocialBlock
          src="/Discord Logo.png"
          width="50"
          height="50"
          desc="DISCORD  (join, comments) - 0.1 MVH"
          first="Your @username in DC"
          second="Link to your Comments" />
        <Footer />
      </div>
    </main>
  )
}

export default Missions;