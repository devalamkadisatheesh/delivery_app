import Header from './Container/Header'
import React,{useState}from 'react'
import Footer from "./Container/Footer";
import emailjs from 'emailjs-com';
const Form1 = () => {
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
      <img src="https://media.istockphoto.com/id/916304160/photo/abstract-waves-background-template-design.jpg?s=170667a&w=0&k=20&c=8MBhfhr_sausMJAMqcJqR71FUE7XvsL5-JQYluhajkE="/>
      <div className='card-img-overlay text-light' >
      <marquee direction="left" style={{"font-family":"Bodoni MT",color:"white","font-size":"20px","margin":"0px"}}className="marqu">
        <p>     <span className="fa fa-warning text-warning"></span>The link is applicable only vidyanikethan college and upto 1km distance</p>
        </marquee>
        <form className='text-light'style={{"font-family":"Bernard MT Condensed","font-size":"20px","color":"white" }}onSubmit={submitHandler}>
        <div className='row'>
        <div className='col-12 col-md-6'>
      <div >
       
          <input type="text"placeholder='Enter your name'name='name'onChange={onChang}style={{"backgroundColor":"black"}}  required/><br/><br/>
          <input type="text"placeholder='Enter your ID'name='id'onChange={onChang}  required/><br/><br/>
          <input type="email"placeholder='Enter your mail'name='email'onChange={onChang}  required/><br/><br/>
          <input type="text"placeholder='Enter your mobile number'name='number'onChange={onChang}  required/><br/><br/>
  
       
      </div>
      </div>
      <div className='col-12 col-md-6'>
      <select style={{"background-color":"black","color":"white"}}name='restaurent'onChange={onChang} required>
      <option>Enter Store/shop</option>
            <option>Sarkar store</option>
            <option>Shanthi store</option>
            <option>Gurusai store</option>
            <option>Ganesh store</option>
            <option>Ruchi restaurent</option>
            <option>Amaravathi restaurent</option>
            <option>pubzi restaurent</option>
            <option>little paradise restaurent</option>
            <option>Luna grill restaurent</option>
          </select><br/><br/>
          <input type="text"placeholder='Enter your product name'name='itemname'onChange={onChang}  required/><br/><br/>
      <input type="text"placeholder='Enter number of products'name='itemsnumber'onChange={onChang}  required/><br/><br/>
          <input type="text"placeholder='Enter your Location name'name='location'onChange={onChang}  required/><br/>
      
 
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
