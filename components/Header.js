import React from 'react'
import User from './User';

const Header = () => {
  return (
    <header className='flex justify-between p-5 text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
            <p className='link'>A Propos</p>
            <p className='link'>Boutique</p>
        </div>
        <div className='flex space-x-4 items-center'>
            <p className='link'>Gmail</p>
            <p className='link'>Images</p>
            <User />
        </div>
    </header>
  )
}

export default Header;
