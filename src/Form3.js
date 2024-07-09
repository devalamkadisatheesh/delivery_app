import Header from './Container/Header'
import React,{useState}from 'react'
import Footer from "./Container/Footer";
import emailjs from 'emailjs-com';
const Form3 = () => {
  const[data,setData]=useState({
    name:'',
    email:'',
    number:"",
    itemname:"",
    itemlocation:"",
    yourlocation:"",
    submitcolor:'',
    submittext:""

  });
 const onChang=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault();
    const {name,submitcolor,submittext}=data;
    emailjs.sendForm('service_zio02bv', 'template_ufspz5k', e.target, 'aIHls5eW6EeuBh_-V')
    .then((result) => {
        console.log(result.text);
       window.alert(`ok ${name} your data succesfull done within 30min to give delivery... `)
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
      <img src="https://th.bing.com/th/id/R.f4a69ccab08db4eb1dafabf814312123?rik=fGnNzcmMS3s%2bag&riu=http%3a%2f%2fwedding-pictures.onewed.com%2fmatch%2fimages%2f145945%2funique-wedding-photo-bride-and-groom-in-background.full.jpg%3f1379300078&ehk=kuETOqSzp0UiBFHdEURJH4A8gLpD17yJc1t5ag7D3s0%3d&risl=&pid=ImgRaw&r=0"width="100%"height="600px"/>
      <div className='card-img-overlay text-light' >
      <marquee direction="left" style={{"font-family":"Bodoni MT",color:"white","font-size":"20px","margin":"0px","background-color":"black"}}>
        <p>     <span className="fa fa-warning text-warning"></span>The link is applicable only vidyanikethan college and upto 1km distance</p>
        </marquee><br/><br/><br/>
        <form className='text-light'style={{"font-family":"Bernard MT Condensed","font-size":"20px","color":"white" }}onSubmit={submitHandler}>
        <div className='row'>
        <div className='col-12 col-md-6'>
      <div >
       
          <input type="text"placeholder='Enter your name'name='name'onChange={onChang}style={{"backgroundColor":"black"}}  required/><br/><br/>
          <input type="email"placeholder='Enter your mail'name='email'onChange={onChang}  required/><br/><br/>
          <input type="text"placeholder='Enter your mobile number'name='number'onChange={onChang}  required/><br/><br/>
  
       
      </div>
      </div>
      <div className='col-12 col-md-6'>
          <input type="text"placeholder='Enter your product name'name='itemname'onChange={onChang}  required/><br/><br/>
      <input type="text"placeholder='Enter item location name 'name='itemlocation'onChange={onChang}  required/><br/><br/>
          <input type="text"placeholder='Enter your Location name'name='yourlocation'onChange={onChang}  required/><br/>
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

export default Form3;
