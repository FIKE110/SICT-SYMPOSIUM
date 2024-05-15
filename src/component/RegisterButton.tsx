import { Link } from 'react-router-dom'
import ArrowIcon from '../assets/icons8-right-arrow-50 (1).png'
const RegisterButton = () => {
  return (
    <Link to='/register'>
    <div className='flex justify-center items-center flex-1 content-center'>
    <button className="rounded-sm bg-[#CAFDC6] p-5 flex justify-center content-center gap-2 ">Register For Free<img 
    className='w-7 '
    src={ArrowIcon}/></button>
  </div>
    </Link>
    
  )
}

export default RegisterButton