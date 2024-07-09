import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='kumar'style={{}}>
      <div className="row "style={{"font-family":"Bodoni MT","backgroundColor":"black"}}>
        <div className='col-12 col-md-4'>
        <Link to="/head"><button className='btn btn-outline-light btn-lg 'style={{"margin":"0px","border-radius":"30%"}}> <span className="fa fa-home text-warning"></span>Home</button></Link><br/>
        <Link to='/form2'><button className='btn btn-outline-light btn-lg 'style={{"margin":"10px","border-radius":"30%"}}> <span className="fa fa-user-circle text-warning"></span>Contact me</button></Link><br/>
        </div>
        <div className='col-12 col-md-4 text-light text-justify'>
            <p>Hi Its start for you please give orders and use this website.Behind this website problems are there and ask permissions to hod and principle and charman sir also please cooperate with me thank you</p>
        </div>
        <div className='col-12 col-md-4 text-light text-justify'>
           <p>Contact me</p> 
           <p>Gmail:devalamkadisatheesh@gmail.com</p>
           <p>Ph-No:9392462163</p>
        </div>
      </div>
      <div className="row "style={{"font-family":"Bodoni MT","backgroundColor":"black"}}>
      <div className='col-12 col-md-4 text-light text-center  text-justify'>
      <img src="https://th.bing.com/th/id/OIP.uF-DuRwqLXy30YvxWYHVCwHaE8?pid=ImgDet&rs=1"width="50"className="rounded-circle text-light "/><span className='text-light'>Arriver</span>
        </div>
        <div className='col-12 col-md-4 text-light text-justify'>
           @2023-2024
        </div>
        <div className='col-12 col-md-4 text-light text-justify'>
          @ S copyrights
        </div>
      </div>
      
</div>
 
  )
}

export default Footer
