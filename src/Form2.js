import React,{Component}from 'react';
import Header from './Container/Header';
import Footer from './Container/Footer';
import emailjs from 'emailjs-com';
class Form2 extends Component{
    state={
        name:"",
        email:"",
        password:"",
        message:"",
        submitmessage:"",
        submitcolor:""
    }
   onChange=e=>{
        this.setState({[e.target.name]:e.target.value});
    }
   onSubmit=e=>{
        e.preventDefault();
       const {name}=this.state;
       emailjs.sendForm('service_zhgh3e5', 'template_bih98vd', e.target, 'p2uudYseUpmpdfzic')
       .then((result) => {
           console.log(result.text);
           this.setState(
            {
              submitmessage:`Thank you ${name} I will contact soon...`,
              submitcolor:"text-info"
            }
        )
       }, (error) => {
           console.log(error.text);
           this.setState(
            {
              submitmessage:"Ooops something went wrong...",
              submitcolor:"text-danger"
            }
           )
       });
       e.target.reset();   
    }
    alerts=()=>{
        window.alert("wait some seconds....")
    }
render(){
    const {submitmessage,submitcolor}=this.state;
    return(
       
        <div className="Container-fluid text-center kuma text-light bg-black" >
            <center >
                <Header/><br/>
        <h2 style={{"font-family":"Times"}}className="text-light"><span className='text-info'>Thank you for your interest</span > </h2>
        <div style={{"backgroundColor":"black"}}>
        <form onSubmit={this.onSubmit} >
            <label>Name : </label><br/>
               <input type="text"name="name"placeholder="Enter name"onChange={this.onChange} required/><br/><br/>
            <label>Email : </label><br/>
            <input type="email"name="email"placeholder="Enter email" onChange={this.onChange} required/><br/><br/>
            <label>Number: </label><br/>
            <input type="password"name="password" placeholder="Enter number"onChange={this.onChange} required/><br/><br/>
<label>Message : </label><br/>
            <input type="text"name="message"placeholder="write content here" onChange={this.onChange} required/><br/><br/>
            <input className="btn btn-primary m-2 buttons" type="submit"onClick={this.alerts}/>
            <input type="reset"className='btn btn-danger buttons m-2' value="clear"/>
        </form>
        </div>
        <h3 className={submitcolor} ><span className='lead'>{submitmessage}</span></h3><br/>
        <Footer/>
        </center>
        </div>
    )
}
}
export default Form2;