function StoryAction(){
    return(
        <div>
            <div className="border border-x-0 border-y-white flex justify-center bg-[#242424] h-[10rem] flex items-center max-ultra-small:h-[7.5rem]">
                <div className="flex justify-between  w-[95%] h-[100%] items-center font-own text-[70px] max-ultra-small:text-[30px] text-white h-[50%] max-small:">
                <p>Start reading</p>
                <p>→</p>
                </div>
            </div>
            <div className="border border-x-0 border-t-0 border-b-white flex justify-center bg-[#242424] h-[10rem] flex items-center max-ultra-small:h-[7.5rem]">
                <div className="flex justify-between  w-[95%] h-[100%] items-center font-own text-[70px] text-white max-ultra-small:text-[30px]">
                <p>Start writing</p>
                <p>→</p>
                </div>
            </div>
            <div className="border border-x-0 border-t-0 border-b-white flex justify-center  bg-[#242424] items-center h-[10rem] max-medium:h-[15rem] max-ultra-small:h-[7.5rem]">
                <div className="flex justify-between  w-[95%] h-[100%] items-center font-own text-[70px] text-white max-medium:s max-ultra-small:text-[30px]">
                <p>Become a member</p>
                <p>→</p>
                </div>
            </div>
        </div>
    )
}

export default StoryAction;