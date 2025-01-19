export default function Hello(props) {
    return (
        <div className="flex justify-center select-none mr-1 mb-1 bg-[#2c5364] text-white text-sm font-dmsans items-center h-[20px] w-[fit-content] px-4 py-4 border-transparent border-blue-500 rounded-full ">
            <p>{props.skill}</p>
        </div>
    )
}