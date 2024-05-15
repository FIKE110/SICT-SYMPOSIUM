interface Props{
    id:number,
    name:string,
    time?:string
}

const TimeCard = (props:Props) => {
  return (
    <div className='bg-white flex py-[20px] content-center'>
        <div className='rounded-[50%] w-[55px] h-[55px] border-solid border-2 bg-[#f8f8f3] flex justify-center content-center'>
            <p className='h-max m-auto'>{props.id}</p>
        </div>
        <div className='flex flex-1 pl-14'>
            <p className='my-auto text-xl font-bold'>{props.name}</p>
        </div>
        {props.time && 
        <div className='flex rounded-3xl border-solid border-2 bg-[#f8f8f3] px-4 py-0'>
            <p className='m-auto text-sm'>{props.time}</p> 
        </div>}
    </div>
  )
}

export default TimeCard