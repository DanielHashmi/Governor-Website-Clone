import Image from "next/image"

const Landing_Page = () => {
    return (
        <div className="lg:h-[80vh] bg-white flex relative justify-center lg:p-10 px-10 pt-10 overflow-hidden">
            <Image className="object-cover opacity-40" fill src={"/bg_house.jpg"} alt={"govern logo"} />

            <div className="2xl:w-[80rem] w-full items-center justify-center lg:justify-between relative gap-10 lg:flex-row flex-col flex">

                <div className="relative top-0 flex flex-col gap-5 lg:items-start items-center justify-center ">
                    <h2 className="text-[#044e83] sm:text-6xl text-5xl font-bold">Governor Sindh</h2>

                    <h3 className="text-[#044e83] sm:text-4xl text-2xl">
                        Kamran Khan Tessori
                    </h3>

                    <h3 className="text-[#2eb6e8] sm:text-5xl text-4xl lg:text-start text-center w-[33rem] font-bold">
                        Certified Cloud
                        Applied Generative AI
                        Engineer (GenEng)
                    </h3>

                    <h3 className="text-[#044e83] sm:text-2xl text-xl font-bold lg:text-start text-center flex flex-col gap-4">
                        <span>Earn up to $5,000 / month</span>
                        Now admissions are open in Hyderabad
                    </h3>

                    <div className="flex gap-10 items-center w-full flex-col lg:flex-row">

                        <button className="bg-[#044e83] rounded-md p-4 font-bold w-9/12 sm:w-11/12 lg:w-52">
                            APPLY NOW
                        </button>

                        <h3 className="text-[#044e83] flex flex-col items-center">
                            <span className="font-bold text-xl">

                                562,143
                            </span>
                            Accepted Applications
                        </h3>
                    </div>

                </div>


                <div className="absolute size-[40rem] top-[3.5rem] right-[-9rem] hidden lg:block">
                    <Image className="object-cover" src={"/kamrantessori.png"} alt={"govern logo"} fill />
                </div>

                <div className="relative size-[40rem] left-20 block lg:hidden">
                    <Image className="object-cover" src={"/kamrantessori.png"} alt={"govern logo"} fill />
                </div>
            </div>

        </div>
    )
}

export default Landing_Page