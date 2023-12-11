import React from 'react';

const HeroSection = () => {
  return (
    <div className='bg-[#ffc017]'>
    <section className="bg-[#ffc017] flex ml-[7.2rem] max-large:ml-[5rem] h-[29rem] mt-[5rem] max-small:ml-[1.5rem] max-big:ml-[6rem]">
      <div className='h-[100%] flex w-[1325px] max-large:w-[600px] justify-between'>
        <div className='flex flex-col justify-center w-[90%]'>
          <p className='font-own text-[100px] h-[6rem] flex items-center mb-[2rem] max-large:text-[80px] tracking-tight max-ultra-small:text-[62px] max-ultra-small:leading-[4.5rem]'>Stay curious.</p>
          <p className='text-[24px] w-[28rem] leading-[1.40rem] mb-[2.5rem] max-large:w-[60%] max-ultra-small:w-[100%]'>Discover stories, thinking, and expertise from writers on any topic.</p>
          <div>
            <button className='bg-black text-white rounded-full py-2.5 px-5 w-[12rem]'>Start reading</button>
          </div>
        </div>
      </div>
    </section>
    </div>


  );
};

export default HeroSection;




