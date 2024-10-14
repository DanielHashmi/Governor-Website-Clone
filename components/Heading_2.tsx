
const Heading_2 = ({ txt }: { txt: string }) => {
    return (
        <div className="flex justify-center p-7">
            <div className="text-[#044e83] md:text-4xl text-2xl font-bold w-[80rem]">
                {txt}
            </div>
        </div>
    )
}

export default Heading_2