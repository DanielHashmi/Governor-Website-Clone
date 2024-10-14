import Image from "next/image"

const Navbar = () => {
    return (
        <div className='bg-[#044e83] flex lg:justify-center p-6 z-50 sticky'>

            <div className="2xl:w-[80rem] w-full flex items-center justify-between">

                <Image className="top-5 absolute" src={"/govern logo.png"} alt={"govern logo"} width={90} height={90} />

                <h1 className='text-[#b9d8f3] font-bold text-xl 2xl:text-2xl ml-[10vw] lg:block hidden'>Tuition Free Education Program on Latest Technologies</h1>
                <h1 className='text-[#b9d8f3] font-bold text-lg lg:text-xl 2xl:text-2xl lg:ml-[10vw] md:ml-[20vw] ml-[27vw] lg:hidden'>Tuition Free Program</h1>

                <ul className='md:flex ml-10 lg:gap-10 gap-5 hidden'>
                    <li>Home</li>
                    <li>Apply</li>
                    <li>Jobs</li>
                    <li>Result</li>
                    <li className='flex gap-2'>
                        Course
                        <svg className='w-4' viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                    </li>
                </ul>

                <Image className="top-5 invert md:hidden" src={"/hamburger.svg"} alt={"hamburger logo"} width={35} height={35} />

            </div>

        </div>
    )
}

export default Navbar