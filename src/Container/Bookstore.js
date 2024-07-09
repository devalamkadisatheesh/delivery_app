import React from 'react'
import {Consumer} from '../Context';
import Bookcard from './Bookcard';
import Footer from './Footer';
import Header from './Header';
const Bookstore = () => {
  return (
<Consumer>
    {(value)=>{
        const {products}=value;
        return(
   <div style={{"font-family":"Bodoni MT"}}>
   <center>
   <Header/>
    <br/>

    <p style={{"font-family":"Monotype Corsiva","font-size":"25px"}}className='bg-dark text-light container'>Choose your item or Enter item name what you want click order </p><br/><br/>
       <div className="row mx-2"style={{"font-family":"Bodoni MT"}}>

                  { products.map((product)=>(
                        <div className="col-12 col-md-4">
                           <Bookcard
                           product={product}
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

export default Bookstore