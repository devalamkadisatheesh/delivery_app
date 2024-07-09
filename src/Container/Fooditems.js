import React from 'react'
import {Consumer} from '../Context';
import Foodcard from './Foodcard';
import Footer from './Footer';
import Header from './Header';
const Fooditems = () => {
  return (
<Consumer>
    {(value)=>{
        const {projects}=value;
        return(
   <div style={{"font-family":"Bodoni MT"}}>
   <center>
   <Header/>
    <br/>

    <p style={{"font-family":"Monotype Corsiva","font-size":"25px"}}className='bg-dark text-light container'>Choose your item or Enter item name what you want click order </p><br/><br/>
       <div className="row mx-2"style={{"font-family":"Bodoni MT"}}>

                  { projects.map((project)=>(
                        <div className="col-12 col-md-4">
                           <Foodcard
                           project={project}
                            />
                            <br/>      
                           </div>
               
                  )
                  )
               }
               
               </div>
               <Footer/> 
   </center>
 </div>
        )
    }}
</Consumer>
) 
}

export default Fooditems
