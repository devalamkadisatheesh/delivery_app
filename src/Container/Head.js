import React from 'react'
import {Link} from 'react-router-dom';
const Head = () => {
 function satheesh(){
  console.log("satheesh kumar koilakonda");
 }
  return (
   <div >
    <header  >
        <nav className="navbar navbar-expand-sm text-dark" style={{"font-family":"Sitka Subheading Semibold","font-size":"25px","padding":"5px","color":"black"}}>
        <span className='text-dark'style={{"margin":"0px"}}> <img src="https://th.bing.com/th/id/OIP.uF-DuRwqLXy30YvxWYHVCwHaE8?pid=ImgDet&rs=1"width="100"className="rounded-circle  "/>Arriver</span>
          <button className="navbar-toggler"data-toggle="collapse"data-target="#collapseid">
            <span className="fa fa-bars text-dark"onClick={satheesh()}></span>
          </button>
          <div className="navbar-collapse collapse  navbar-left "id="collapseid"style={{"margin":"10px","text-align":"right"}}>
         
     <div style={{"flexGrow":"1"}} ></div>
          <Link to="/form2"><button className='btn btn-outline-warning btn-lg 'style={{"margin":"30px"}}>Contact me</button></Link><br/>
        <Link to='/about'style={{"margin":"30px","color":"black"}} className='aboutus'>About us</Link>
          </div>
        </nav>
        <div className='container-fluid'>
        <p style={{"font-family":"Sitka Subheading Semibold","font-size":"15px","padding":"0px"}} className="container-fluid">Satheesh delivery imports and exports</p>
        </div>
        </header>
       
   </div>
  )
}

export default Head
