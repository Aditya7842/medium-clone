export default function Footer({blogData, buttons, contract}){
    return(
    <div className="end-section w-[100%]">
        <div className='w-[82.8%] ml-[7.2rem] max-large:ml-[5rem] max-small:ml-[1.5rem] mt-[2rem] grid grid-cols-12 max-large:grid-cols-1 max-big:ml-[6rem] max-small:w-[95%] max-ultra-small:w-[90%]'>
            <div className='col-span-7 max-large:col-span-1 max-large:py-[2rem] max-large:order-2'>
                {blogData.map((content, index) => {
                    return(
                        <div className='flex mb-[5rem] items-center min-h-[10rem] max-h-[12rem] max-small:space-x-[35%] max-ultra-small:space-x-[20%]'>
                            <div className='flex flex-col mr-[1rem] '>
                                <div className='flex items-center gap-x-2 font-serif mb-2'>
                                    <img src={`blogger_${index + 1}.png`} alt="" className='rounded-full h-[2rem]'/>
                                    <p className='font-normal flex'>{content.person}</p>
                                </div>
                                <div className='mb-2'>
                                    <p className='font-serif font-bold'>{content.title}</p>
                                </div>
                                <div className='text-stone-500 font-serif mb-2 text-ellipsis'>
                                    <p className='overflow-hidden overflow-ellipsis
                                     h-[3rem] max-small:hidden'>{content.blog}</p>
                                </div>
                                <div className='flex gap-x-2 text-stone-500 font-serif'>
                                    <p>{content.time}</p>
                                    <p>.</p>
                                    <p>{content.minute} min read</p>
                                </div>
                            </div>
                         
                            <img src={`picture_${index + 1}.jpg`} alt="" className='w-[15rem] max-small:w-[12rem] max-ultra-small:aspect-[0.2] max-ultra-small:h-[5rem]'/>
                      
                        </div>
                    );
                })}
            </div>
            <div className='col-span-4 col-start-9 flex flex-col max-large:h-[15%] max-large:col-span-1 max-large:order-1'>
                <div className='flex mb-4'>
                    <p className='font-serif font-medium'>Discover more of what matters to you</p>
                </div>
                <div className='flex flex-wrap gap-x-2 mb-2'>
                    {buttons.map((data) => {
                        return(
                            <button class="bg-[#eeeeee] text-neutral-800 text-[14px] font-serif py-2 px-4 rounded-full mb-4 font-normal">
                                {data}
                            </button>
                        )
                    })}
                </div>
                <div>
                    <p className='text-[#1a8917] text-[14px] mb-4'>See more topics</p>
                </div>

                <div className='h-[0.01rem] bg-stone-300 mb-4'> 

                </div>
 
                <div className='flex flex-wrap gap-x-[2rem] leading-[2rem] max-large:hidden'>
                    {contract.map((data) => {
                        return(
                            <p className='font-serif text-zinc-500 text-[14px]'>{data}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
    )
}