import CalendarIcon from '../assets/icons8-calendar-24.png'

const IconCard = () => {
  return (
    <div className='flex w-max justify-center content-center gap-2 bg-white rounded-2xl p-4'>
        <img className='w-5' src={CalendarIcon}/>
        <p className='text-sm'>May 22nd, 2024.</p>
    </div>
  )
}

export default IconCard