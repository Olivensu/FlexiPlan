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
      <div className='w-full sm:w-[500px] md:w-[700px] mx-auto px-2'>
        <h1 className='text-xl md:text-4xl font-sans font-thin text-center md:text-start'>Flexiplan</h1>
        <h1 className='text-xl hidden md:block font-sans font-thin my-5'>Make your own plan and enjoy great savings! Only for GP Customers</h1>

        <section className='grid grid-cols-8 items-center gap-5'>
          <div className='col-span-3'>            
            <h3 className='text-lg md:text-2xl font-sans font-extralight'>Validity</h3>
            <h3 className='text-lg md:text-2xl font-sans mt-1 font-extralight text-[#76C779]'>{longevity} Days</h3>
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

        <div className='h-[1px] bg-gray-200 my-5'></div>

        <section className='grid grid-cols-8 gap-5'>
          <div className='col-span-3'>            
            <h3 className='text-lg md:text-2xl font-sans font-extralight'>Internet</h3>
            <h3 className='text-lg mt-2 hidden md:block font-sans'>Regular</h3>
            <h3 className='text-lg md:text-2xl font-sans mt-1 font-extralight text-[#76C779]'>{data>=1024 ? `${data/1024} GB`: `${data} MB`}</h3>
          </div>
          <div className='col-span-5'>      
            {
              bubbleMap.data.map((mb, index) => (
                <button key={index} className={` text-xs md:text-sm w-12 h-12 md:w-16 md:h-16 m-1 md:m-2 rounded-full border-[1px] font-sans font-thin ${data === mb ? 'bg-[#76C779] text-white' : ''} ${!isEligible('data', mb) ? 'cursor-not-allowed opacity-80 bg-gray-100' : ''}`}
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

        <div className='h-[1px] bg-gray-200 my-5'></div>

        <section className='grid grid-cols-8  gap-5'>
          <div className='col-span-3'>            
            <h3 className='text-lg md:text-2xl font-sans font-extralight'>4G Internet</h3>
            <h3 className='text-lg mt-2 hidden md:block md:text-xl font-sans'>4G Only</h3>
            <h3 className='text-lg md:text-2xl font-sans mt-1 font-extralight text-[#76C779]'>{fourg>=1024 ? `${fourg/1024} GB`: `${fourg} MB`}</h3>
            <h3 className='text-lg mt-2 font-sans text-gray-500'>4G enabled handset + SIM required</h3>
          </div>
          <div className='col-span-5'>      
            {
              bubbleMap.fourg.map((mb, index) => (
                <button key={index} className={` text-xs md:text-sm w-12 h-12 md:w-16 md:h-16 m-1 md:m-2 rounded-full border-[1px] font-sans font-thin ${fourg === mb ? 'bg-[#76C779] text-white' : ''} ${!isEligible('fourg', mb) ? 'cursor-not-allowed opacity-80 bg-gray-100' : ''}`}
                onClick={
                  () => setFourg(mb)
                }
                disabled={!isEligible("fourg", mb)}
                >
                  {mb>=1024 ? `${mb/1024} GB`: `${mb} MB`}
                </button>
              ))
            }
          </div>
        </section>

        <div className='h-[1px] bg-gray-200 my-5'></div>

        <section className='grid grid-cols-8  gap-5'>
          <div className='col-span-3'>            
            <h3 className='text-lg md:text-2xl font-sans font-extralight'>Minutes</h3>
            <h3 className='text-lg md:text-2xl font-sans mt-1 font-extralight text-[#EE395A]'>{voice} Min</h3>
            <h3 className='text-lg mt-2 font-sans text-gray-500'>Any Local Number</h3>
          </div>
          <div className='col-span-5'>      
            {
              bubbleMap.voice.map((minute, index) => (
                <button key={index} className={` text-xs md:text-sm w-12 h-12 md:w-16 md:h-16 m-1 md:m-2 rounded-full border-[1px] font-sans font-thin ${voice === minute ? 'bg-[#EE395A] text-white' : ''} ${!isEligible('voice', minute) ? 'cursor-not-allowed opacity-80 bg-gray-100' : ''}`}
                onClick={
                  () => setVoice(minute)
                }
                disabled={!isEligible("voice", minute)}
                >
                  {minute}
                </button>
              ))
            }
          </div>
        </section>

        <div className='h-[1px] bg-gray-200 my-5'></div>

        <section className='grid grid-cols-8  gap-5'>
          <div className='col-span-3'>            
            <h3 className='text-lg md:text-2xl font-sans font-extralight'>Bioscope</h3>
            <h3 className='text-lg md:text-2xl font-sans mt-1 font-extralight text-[#C34AB7]'>{bioscope>=1024 ? `${bioscope/1024} GB`: `${bioscope} MB`}</h3>
            <h3 className='text-lg mt-2 font-sans text-gray-500'>Only used to watch Bioscope</h3>
          </div>
          <div className='col-span-5'>      
            {
              bubbleMap.bioscope.map((mb, index) => (
                <button key={index} className={` text-xs md:text-sm w-12 h-12 md:w-16 md:h-16 m-1 md:m-2 rounded-full border-[1px] font-sans font-thin ${bioscope === mb ? 'bg-[#C34AB7] text-white' : ''} ${!isEligible('bioscope', mb) ? 'cursor-not-allowed opacity-80 bg-gray-100' : ''}`}
                onClick={
                  () => setBioscope(mb)
                }
                disabled={!isEligible("bioscope", mb)}
                >
                  {mb>=1024 ? `${mb/1024} GB`: `${mb} MB`}
                </button>
              ))
            }
          </div>
        </section>

        <div className='h-[1px] bg-gray-200 my-5'></div>

        <section className='grid grid-cols-8  gap-5'>
          <div className='col-span-3'>            
            <h3 className='text-lg md:text-2xl font-sans font-extralight'>SMS</h3>
            <h3 className='text-lg md:text-2xl font-sans mt-1 font-extralight text-[#4ABBC3]'>{sms} SMS</h3>
          </div>
          <div className='col-span-5'>      
            {
              bubbleMap.sms.map((num, index) => (
                <button key={index} className={` text-xs md:text-sm w-12 h-12 md:w-16 md:h-16 m-1 md:m-2 rounded-full border-[1px] font-sans font-thin ${sms === num ? 'bg-[#4ABBC3] text-white' : ''} ${!isEligible('sms', sms) ? 'cursor-not-allowed opacity-80 bg-gray-100' : ''}`}
                onClick={
                  () => setVoice(num)
                }
                disabled={!isEligible("sms", num)}
                >
                  {num}
                </button>
              ))
            }
          </div>
        </section>
      </div>
    </div>
  );
}
