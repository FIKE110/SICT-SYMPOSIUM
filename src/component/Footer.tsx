import React from 'react'
import { urls } from './Header'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex'>
        <div>
            <h1 className='text-[220px] opacity-20'>SICT'3RD</h1>
        </div>
        <div className='flex flex-1 justify-center items-center'>
            <ul className='text-sm'>
                <li className='font-medium'>Menu</li>
                {
                    urls.map(link=><li className='p-2'><Link to={link.to}>{link.name}</Link></li>)
                }
            </ul>
        </div>
    </footer>
  )
}

export default Footer