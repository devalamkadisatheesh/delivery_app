import React from 'react'

const Header = () => {
  return (
    <div className='bg-dark text-white'>
      <div className='navbar'></div>
      <a href='#'><span className='fas fa--arrow-circle-left'></span>Home</a>
      <a href='#'><span className='fas fa--arrow-circle-left'></span>Order</a>
    </div>
  )
}

export default Header;
