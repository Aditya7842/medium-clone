import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';


export default function Blog(){

    const [value, setValue] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/data')
        .then((res) => setValue(res.data));
    }, []);

    const data = value.slice(0, 6);


    return(

        <section className="feature flex border-b border-stone-150">
                <div className='flex w-[82.8%] ml-[7.2rem] max-large:ml-[5rem] max-small:ml-[1.5rem] mt-[2rem] flex-col max-big:ml-[6rem]'>
                    <div className='flex items-center gap-x-2 mb-4'>
                     <p className='trend-box'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none" class="ji ah"><path fill="#fff" d="M0 .8h28v28H0z"/><g opacity="0.8" clip-path="url(#trending_svg__clip0)"><path fill="#fff" d="M4 4.8h20v20H4z"/><circle cx="14" cy="14.79" r="9.5" stroke="#000"/><path d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3" stroke="#000" stroke-linecap="round"/></g><defs><clipPath id="trending_svg__clip0"><path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"/></clipPath></defs></svg></p>
                     <p className='font-semibold'>Trending on medium</p>
                    </div>

                     <div className='grid grid-cols-12 mt-[1rem]'>
                        {data.map((content, index) => {
                           
                         

                           return (
                      
                                
                                
                                <div className='col-span-4 flex gap-x-4 h-[7rem] mb-[2rem] max-big:col-span-6
                                max-small:col-span-12 '> 
                                    <div className='text-[1.9rem] text-zinc-400 text-opacity-25 relative mr-[2rem]'>
                                        
                                        <p className='absolute top-[-1rem]'>{`0` + (index + 1)}</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex gap-x-2 mb-2'>
                                            <img src={`person_${index + 1}.png`} alt="" className='h-[1.5rem] rounded-full'/>
                                            <p className='font-serif text-[14px]'>{content.name}</p>
                                        </div>
                                        <div className='mb-[1rem]'><p className='font-serif font-bold'>{content.comment}</p></div>
                                        <div className='flex gap-x-2 font-serif text-stone-400'>
                                            <p>{content.date}</p>
                                            <div className='flex flex-col justify-center items-center'>
                                               <p>.</p>
                                            </div>
                                            <p>{content.read}</p>

                                        </div>
                                    </div>
                                </div>
                                );
                        })
                        
                    }
                     </div>
                </div>
        </section>
       
                
    );
}


