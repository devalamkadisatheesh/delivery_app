import Header from './Container/Header'
import React ,{useState}from 'react'

import Footer from "./Container/Footer";
import emailjs from 'emailjs-com';
const Form = () => {
  const[data,setData]=useState({
    name:'',
    id:'',
    email:'',
    number:"",
    restaurent:"",
    itemname:"",
    itemsnumber:"",
    location:"",
    submitcolor:'',
    submittext:""

  });
 const onChang=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault();
    const {name,submitcolor,submittext}=data;
    emailjs.sendForm('service_gj9mcpx', 'template_2vmiyus', e.target, 'p2uudYseUpmpdfzic')
    .then((result) => {
        console.log(result.text);
       window.alert(`ok ${name} your order succesfull done within 30min to give delivery... `)
    }, (error) => {
        console.log(error.text);
        window.alert("Something went wrong please try again")
    });
    e.target.reset();   
 }
  return (

    <div className='bg-dark'>
      <center>
      <Header/>
      
     <div className='card'>
      <img src="https://th.bing.com/th/id/R.b27382a3bcbc80151beebd10c3d38933?rik=lgrR4F84aizoWQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fK7tq1CL.jpg&ehk=c8Lahyrs5f%2bFRWmBONtUz7Vf538d%2fu3nFK4m3%2fv7%2fg0%3d&risl=&pid=ImgRaw&r=0"width="100%"height="600px"/>
      <div className='card-img-overlay text-light' >
      <marquee direction="left" style={{"font-family":"Bodoni MT",color:"white","font-size":"20px","margin":"0px"}}className="formmarqu">
        <p>     <span className="fa fa-warning text-warning"></span>The link is applicable only vidyanikethan college and upto 1km distance</p>
        </marquee>
        <form className='text-light'style={{"font-family":"Bernard MT Condensed","font-size":"20px","color":"white" }}onSubmit={submitHandler}action="https://formsubmit.co/75ea3fa5bb954f03d123fa5befc70a3b" method="POST">
        <div className='row'>
        <div className='col-12 col-md-6'>
      <div >
       
          <input type="text"placeholder='Enter your name'name='name'onChange={onChang}style={{"backgroundColor":"black"}} required/><br/><br/>
          <input type="text"placeholder='Enter your ID'name='id'onChange={onChang}  required/><br/><br/>
          <input type="email"placeholder='Enter your mail'name='email'onChange={onChang} required/><br/><br/>
          <input type="text"placeholder='Enter your mobile number'name='number'onChange={onChang}  required/><br/><br/>
  
       
      </div>
      </div>
      <div className='col-12 col-md-6'>
      <select style={{"background-color":"black","color":"white"}} name="restaurent"onChange={onChang} required>
      <option>Enter restaurent</option>
            <option>Aha restaurent</option>
            <option>Ruchi restaurent</option>
            <option>Amaravathi restaurent</option>
            <option>pubzi restaurent</option>
            <option>little paradise restaurent</option>
            <option>Luna grill restaurent</option>
          </select><br/><br/>
          <input type="text"placeholder='Enter your Item name'name='itemname'onChange={onChang} required/><br/><br/>
      <input type="text"placeholder='Enter number of items'name='itemsnumber'onChange={onChang} required/><br/><br/>
          <input type="text"placeholder='Enter your location name'name='location'onChange={onChang} required/><br/>
      
 
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

export default Form
