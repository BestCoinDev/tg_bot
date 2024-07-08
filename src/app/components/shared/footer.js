
import { DefaultIcons } from './defaultIcons';
import { ActiveIcons } from './activeIcons';
import { useRouterContext } from '../providers/routerProvider';
import Image from 'next/image';

const Footer = () => {

  const { router, setRouter } = useRouterContext();

  return (
    <section className="w-full flex justify-center mb-5 mt-3">
      <div className="flex justify-between items-center px-6 w-[340px] h-[70px] border-[#F9F9F9] border-2 bg-[#1E1F40] rounded-[25px]">
        {
          DefaultIcons.map((item, index) => {
            if (item.path == router) {
              if(item.img)
                return (
                  <button key={index} className='flex items-center justify-center w-[51px] h-[47px] bg-[#D9D9D9] rounded-[50%]' onClick={() => setRouter(item.path)}>
                    <Image src={ActiveIcons[router]} width={item.width} height={item.height} alt='Nav buttons' />
                  </button>
                );
            } else {
              if(item.img)
                return (
                  <button key={index} onClick={() => setRouter(item.path)}>
                    <Image src={item.img} width={item.width} height={item.height} alt='Nav buttons' />
                  </button>
                );
            }
          })
        }
      </div>
    </section>
  );
}

export default Footer;