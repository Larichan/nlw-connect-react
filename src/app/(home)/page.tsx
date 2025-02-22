import logo from '../../assets/logo.svg';

import Image from 'next/image';
import { Radio } from 'lucide-react';
import { SubscriptionForm } from './subscription-form';

export default function Home() {
  return (
      <div
        className="min-h-dvh flex flex-col justify-center gap-16"
      >
        <div
          className="flex flex-col gap-8 w-full max-w-[550px] items-center md:items-start">
            <Image src={logo} alt='devCoder' width={108.5} height={30} />
            <h1 className='text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left'>
              <span className='text-blue'>Event</span> 
              Coder {new Date().getFullYear()}
            </h1>
        </div>

        <div className="flex gap-5 items-stretch flex-col md:flex-row">
          <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className='font-heading font-semibold text-gray-200 text-xl'>Sobre o Evento</h2>
              <span className='text-purple font-semibold text-xs flex items-center gap-2'>
                <Radio />
                AO VIVO
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra libero eu justo vehicula, ut aliquet ligula facilisis. 
              Fusce auctor orci ac neque gravida, sed malesuada odio cursus. Integer id vestibulum nunc, at volutpat justo. Nulla id purus ut 
              ante volutpat.
              <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          
          <SubscriptionForm />
        </div>
      </div>
  );
}
