function StoryFooter(){
    return(
        <div className={`flex-no-wrap z-50 flex w-full items-center justify-between lg:flex-wrap lg:justify-start h-20 border-b border-black font-serif bg-[#fff] border border-b-white max-small:flex-col`}>
          <div class="flex flex-wrap items-center justify-between w-[95%] ml-[2.2rem]  h-full max-large:ml-[1.2rem] max-large:w-[92%]">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="medium-logo.svg" className="h-6" alt="Medium Logo" />
          </a>
   
          <ul className="font-small flex w-[25%] max-large:w-[40%] max-small:w-[55%] justify-between items-center  font-own text-[11px] underline mr-[2rem]">
            <li>About</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Help</li>
            <li>Teams</li>
            <li>Press</li>
          </ul>
        </div>
  </div>


    )
}

export default StoryFooter;