import Image from "next/image"

const Three_Cards = () => {
    return (
        <div className="flex justify-center p-5">
            <div className="flex xl:w-[80rem] gap-5 w-full flex-col sm:flex-row">
                <div className="sm:w-[40rem] h-[18rem] rounded-xl relative shadow-xl shadow-black">
                    <Image className="object-cover rounded-xl" src={"/download.jpg"} alt={"govern logo"} fill />
                </div>
                <div className="sm:w-[40rem] h-[18rem] rounded-xl relative shadow-xl shadow-black">
                    <Image className="object-cover rounded-xl" src={"/imageWebsite2.a102c7b5.jpg"} alt={"govern logo"} fill />
                </div>
                <div className="sm:w-[40rem] h-[18rem] rounded-xl relative shadow-xl shadow-black">
                    <Image className="object-cover rounded-xl" src={"/download (1).jpg"} alt={"govern logo"} fill />
                </div>
            </div>
        </div>
    )
}

export default Three_Cards