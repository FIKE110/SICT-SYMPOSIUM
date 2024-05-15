import SupportImage from '../assets/profile.webp'

const SupportCard = () => {
  return (
    <div className='flex gap-8' >
        <img className='w-40 rounded-md p-2' src={SupportImage}/>
        <div className='text-left'>
            <p className='font-bold p-2'>Chihurum Fortune</p>
            <p className='text-sm p-2'>Support Manager</p>
            <div>
                <img />
                <img />
            </div>
        </div>
    </div>
  )
}

export default SupportCard