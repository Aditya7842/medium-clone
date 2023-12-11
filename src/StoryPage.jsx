function StoryPage(){
    return (
        <div className="w-full bg-[#242424] bg-[url('start.webp')] h-[97rem] max-ultra-small:h-[75rem]"> 
        <section className="w-[40rem] flex flex-col  max-large:w-[92%] ml-[2.4rem] max-large:ml-[1rem]">
            <div className="text-white text-[80px] max-large:text-[70px] flex font-own leading-[6rem] mt-[7rem] mb-[4rem] max-ultra-small:mb-[2rem] max-ultra-small:text-[40px] max-ultra-small:leading-[3rem] ">Everyone has a story to tell.</div>

            <div className="flex flex-col font-thin font-own text-[21px] text-white opacity-80 max-large:w-[100%] max-ultra-small:text-[15px]">
                <p className="mb-[1rem]">
                Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.
                </p>
                <p className="mb-[2rem]">
                We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we're building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.
                </p>

                <div className="flex flex-col  gap-[0.5rem] font-serif text-[28px] font-light mb-[2rem]">
                <p className="bg-[#fff] bg-opacity-30 w-[34rem] text-white opacity-100 line-clamp-6 max-ultra-small:text-[20px] max-ultra-small:w-[20rem]">
                Ultimately, our goal is to deepen our collective
                understanding of the world through the power of
                writing.</p>
                </div>

                <p className="mb-[2rem] max-ultra-small:mb-[0rem]">
                Over 100 million people connect and share their wisdom on Medium every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.
                </p>

                <p>Instead of selling ads or selling your data, we’re supported by a growing community of <span className="underline">Medium members</span> who align with our mission. If you’re new here, <span className="underline">start exploring</span>. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then <span className="underline">share your own story.</span></p>

            </div>

        </section>
        </div>
    )
}

export default StoryPage;