import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="row satheesh"style={{"font-family":"Bodoni MT"}}>
        <div className='col-12 col-md-4'>
        <a href="#"><button className='btn btn-outline-light btn-lg 'style={{"margin":"0px","border-radius":"30%"}}> <span className="fa fa-home text-warning"></span>Home</button></a><br/>
        <a href="#"><button className='btn btn-outline-light btn-lg 'style={{"margin":"10px","border-radius":"30%"}}> <span className="fa fa-user-circle text-warning"></span>Contact me</button></a><br/>
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
    </div>
  )
}

export default Footer
