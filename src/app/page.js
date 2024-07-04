'use client';

import { useState } from 'react';
import bubbleMap from './json-files/bubble-map.json'
import eligibilityMap from './json-files/eligibility-map.json'
import selectedBubbles from './json-files/selected-bubbles.json'

export default function Home() {
  const [longevity, setLongevity] = useState(selectedBubbles?.longevity);
  const [voice, setVoice] = useState(selectedBubbles.voice);
  const [data, setData] = useState(selectedBubbles.data);
  const [fourg, setFourg] = useState(selectedBubbles.fourg);
  const [bioscope, setBioscope] = useState(selectedBubbles.bioscope);
  const [sms, setSms] = useState(selectedBubbles.sms);
  const [selected, setSelected] = useState({...selectedBubbles});

  const isEligible = (category, value) => {
    const day = `day_${longevity}`
    return eligibilityMap[day] && eligibilityMap[day][category] && eligibilityMap[day][category].includes(value);
  };

  console.log(selected)
  return (
    <div className="mx-auto font-sans font-thin m-2">
      <div className='w-full sm:w-[500px] md:w-[700px] border-2 mx-auto px-2'>
        <h1 className='text-xl md:text-4xl font-sans font-thin text-center md:text-start'>Flexiplan</h1>
        <h1 className='text-xl hidden md:block font-sans font-thin my-3'>Make your own plan and enjoy great savings! Only for GP Customers</h1>

        <section className='grid grid-cols-8 items-center'>
          <div className='col-span-3'>            
            <h3 className='text-lg md:text-2xl font-sans font-extralight'>Validity</h3>
            <h3 className='text-lg md:text-2xl font-sans mt-1 font-extralight text-[#76C779]'>{selected.longevity} Days</h3>
          </div>
          <div className='col-span-5'>      
            {
              bubbleMap.longevity.map((day, index) => (
                <button key={index} className={` text-xs md:text-sm w-12 h-12 md:w-16 md:h-16 m-1 md:m-2 rounded-full border-[1px] font-sans font-thin ${longevity === day ? 'bg-[#76C779] text-white' : ''}`}
                onClick={
                  () => setLongevity(day)
                }
                >
                  {day}
                </button>
              ))
            }
          </div>
        </section>

        <div className='h-[1px] bg-gray-200 my-3'></div>

        <section className='grid grid-cols-8 items-center'>
          <div className='col-span-3'>            
            <h3 className='text-lg md:text-2xl font-sans font-extralight'>Internet</h3>
            <h3 className='text-lg md:text-xl font-sans'>Regular</h3>
            <h3 className='text-lg md:text-2xl font-sans mt-1 font-extralight text-[#76C779]'>{selected.data/1024} GB</h3>
          </div>
          <div className='col-span-5'>      
            {
              bubbleMap.data.map((mb, index) => (
                <button key={index} className={` text-xs md:text-sm w-12 h-12 md:w-16 md:h-16 m-1 md:m-2 rounded-full border-[1px] font-sans font-thin ${data === mb ? 'bg-[#76C779] text-white' : ''} ${!isEligible('data', mb) ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={
                  () => setData(mb)
                }
                disabled={!isEligible("data", mb)}
                >
                  {mb>=1024 ? `${mb/1024} GB`: `${mb} MB`}
                </button>
              ))
            }
          </div>
        </section>
      </div>
    </div>
  );
}
