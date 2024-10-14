import Image from 'next/image'

type CardType = {
    card1: string;
    card2: string;
    card3: string;
    card1_image: string;
    card2_image: string;
    card3_image: string;

}

const Three_Small_Cards = ({ card1, card2, card3, card1_image, card2_image, card3_image }: CardType) => {
    return (
        <div className='flex justify-center'>
            <div className='w-[80rem] flex md:flex-row flex-col md:gap-10 gap-5 p-5'>
                <div className='dim_shadow rounded-lg transition-all hover:scale-105'>
                    <div className="md:w-[14rem] h-[24rem] md:h-[10rem] relative">
                        <Image className="object-cover" src={card1_image} alt={"govern logo"} fill />
                    </div>
                    <div className='flex md:w-[14rem] text-center justify-center items-center text-black font-bold h-16'>
                        <h2>{card1}</h2>
                    </div>
                </div>
                <div className='dim_shadow rounded-lg transition-all hover:scale-105'>
                    <div className="md:w-[14rem] h-[24rem] md:h-[10rem] relative">
                        <Image className="object-cover" src={card2_image} alt={"govern logo"} fill />
                    </div>
                    <div className='flex md:w-[14rem] text-center justify-center items-center text-black font-bold h-16'>
                        <h2>{card2}</h2>
                    </div>
                </div>
                <div className='dim_shadow rounded-lg transition-all hover:scale-105'>
                    <div className="md:w-[14rem] h-[24rem] md:h-[10rem] relative">
                        <Image className="object-cover" src={card3_image} alt={"govern logo"} fill />
                    </div>
                    <div className='flex md:w-[14rem] text-center justify-center items-center text-black font-bold h-16'>
                        <h2>{card3}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Three_Small_Cards