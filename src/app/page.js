'use client'


import { Inter } from 'next/font/google';

import { useRouterContext } from './components/providers/routerProvider';
import { useState, useEffect } from "react";

import Main from './components/main/main';
import Boost from './components/boost/boost';
import Earn from './components/earn/earn';
import Invite from './components/invite/invite';
import Statistics from './components/statistics/statistics';
import Missions from './components/missions/missions';
import Account from './components/account/account';
import Rules from './components/rules/rules';
import PreSale from './components/preSale/preSale';

import { DefaultIcons } from './components/shared/defaultIcons';

const inter = Inter({ subsets: ['latin'] });


export default function Home() {

  const { router } = useRouterContext();

  const [currentIndex, setCurrentIndex] = useState(2);

  useEffect(() => {
    DefaultIcons.map((item) => {
      if (item.path == router)
        setCurrentIndex(item.id);
    })
  }, [router])

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div className={`flex transition-transform ${currentIndex == 0 || currentIndex == 1 || currentIndex == 7 || currentIndex == 8 ? "duration-0" : "duration-500"}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        <div key={0} className="min-w-full flex flex-col justify-end">
          <Rules />
        </div>
        <div key={1} className="min-w-full flex flex-col justify-end">
          <Account />
        </div>
        <div key={2} className="min-w-full flex flex-col justify-end">
          <Main />
        </div>
        <div key={3} className="min-w-full flex flex-col justify-end">
          <Boost />
        </div>
        <div key={4} className="min-w-full flex flex-col justify-end">
          <Earn />
        </div>
        <div key={5} className="min-w-full flex flex-col justify-end">
          <Invite />
        </div>
        <div key={6} className="min-w-full flex flex-col justify-end">
          <Statistics />
        </div>
        <div key={7} className="min-w-full flex flex-col justify-end">
          <Missions />
        </div>
        <div key={8} className="min-w-full flex flex-col justify-end">
          <PreSale />
        </div>
      </div>
    </div>
  );
}
