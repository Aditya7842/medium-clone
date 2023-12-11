function StoryAction(){
    return(
        <div>
            <div className="border border-x-0 border-y-white flex justify-center bg-[#242424] h-[10rem] flex items-center">
                <div className="flex justify-between  w-[98%] h-[100%] items-center font-own text-[70px] text-white h-[50%]">
                <p>Start reading</p>
                <p>→</p>
                </div>
            </div>
            <div className="border border-x-0 border-t-0 border-b-white flex justify-center bg-[#242424] h-[10rem] flex items-center">
                <div className="flex justify-between  w-[98%] h-[100%] items-center font-own text-[70px] text-white">
                <p>Start writing</p>
                <p>→</p>
                </div>
            </div>
            <div className="border border-x-0 border-t-0 border-b-white flex justify-center  bg-[#242424] items-center h-[10rem] max-medium:h-[15rem]">
                <div className="flex justify-between  w-[98%] h-[100%] items-center font-own text-[70px] text-white max-medium:s ">
                <p>Become a member</p>
                <p>→</p>
                </div>
            </div>
        </div>
    )
}

export default StoryAction;