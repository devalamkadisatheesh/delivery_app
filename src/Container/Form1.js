import Header from './Container/Header'
import React from 'react'
import Footer from "./Container/Footer";
const Form1 = () => {
  return (
    <div className='bg-dark'>
      <center>
      <Header/>
      
     <div className='card'>
      <img src="https://wallpapertag.com/wallpaper/full/a/8/d/34170-full-size-website-background-2560x1600-for-tablet.jpg"width="100%"height="600px"/>
      <div className='card-img-overlay text-light' >
      <marquee direction="left" style={{"font-family":"Bodoni MT",color:"white","font-size":"20px","margin":"0px","background-color":"black"}}>
        <p>     <span className="fa fa-warning text-warning"></span>The link is applicable only vidyanikethan college and upto 1km distance</p>
        </marquee>
        <form className='text-light'style={{"font-family":"Bernard MT Condensed","font-size":"20px","color":"white" }}>
        <div className='row'>
        <div className='col-12 col-md-6'>
      <div >
       
          <input type="text"placeholder='Enter your name'style={{"backgroundColor":"black"}}/><br/><br/>
          <input type="text"placeholder='Enter your ID'/><br/><br/>
          <input type="text"placeholder='Enter your mail'/><br/><br/>
          <input type="text"placeholder='Enter your mobile number'/><br/><br/>
  
       
      </div>
      </div>
      <div className='col-12 col-md-6'>
      <select style={{"background-color":"black","color":"white"}}>
      <option>Enter </option>
            <option>Aha restaurent</option>
            <option>Ruchi restaurent</option>
            <option>Amaravathi restaurent</option>
            <option>pubzi restaurent</option>
            <option>little paradise restaurent</option>
            <option>Luna grill restaurent</option>
          </select><br/><br/>
          <input type="text"placeholder='Enter your Item name'/><br/><br/>
      <input type="text"placeholder='Enter number of items'/><br/><br/>
          <input type="text"placeholder='Enter Location name'/><br/>
      
 
      </div>
      </div>
      <input type="submit"value="Submit"style={{"margin":"10px"}}/><input type="reset"value="clear"style={{"margin":"10px"}}/>
      </form>
      </div>
     </div>
     <Footer/>
     </center>
    </div>
  )
}

export default Form1
