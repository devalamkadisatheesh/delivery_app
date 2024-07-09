import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className=' kumar text-light'style={{"font-family":"Bodoni MT","font-size":"30px","backgroundColor":"black"}}>
      <div className='navbar text-light'style={{"backgroundColor":"black"}}>
 <Link to="/"> <i className='fa fa-arrow-circle-left'style={{"color":"white"}}>Home</i></Link>
    <Link to='/form' className='order'> <span style={{"color":"white"}}>Order</span></Link>
      </div>
    </div>
  )
}

export default Header;
