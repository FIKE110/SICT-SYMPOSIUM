import { Link, NavLink } from 'react-router-dom'
import ArrowIcon from '../assets/icons8-arrow-right-24.png'

export const urls=[
  {name:'About',to:'/#about'},
  {name:'Speakers',to:'/speakers'},
  {name:'Schedule',to:'/schedule'},
  {name:'Registration',to:'/register'},
  {name:'Contact',to:'/contact'},
]

const Header = () => {
  return (
    <header className='flex justify-center items-center gap-[40px]' >
      <div>
        <h2 className='text-2xl'><Link to='/'>SICT'3RD</Link></h2>
      </div>
      <nav className='flex pl-[25px] text-sm'>
        <ul className='flex justify-center items-center'>
          {
            urls.map(link=><li className='px-12'><NavLink to={link.to}
            className={({isActive})=> isActive ? 
            'underline underline-offset-8 decoration-[#2F5858] decoration-3' 
            : '' }
            >{link.name}</NavLink></li>)
          }
        </ul>
      </nav>
      <div className=''>
        <Link to='/register'>
        <button className='bg-[#CAFDC6] p-3 flex justify-center items-center'>
          Register Today<img className="pl-3 w-8" src={ArrowIcon}/></button>
        </Link>
      
      </div>
    </header>
  )
}

export default Header