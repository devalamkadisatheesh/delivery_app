import React from 'react'
import {Consumer} from '../Context';
import Generalcard from './Generalcard';
import Footer from './Footer';
import Header from './Header';
const Generalstore = () => {
  return (
<Consumer>
    {(value)=>{
        const {store}=value;
        return(
   <div style={{"font-family":"Bodoni MT"}}>
   <center>
   <Header/>
    <br/>

   
       <div className="row mx-2"style={{"font-family":"Bodoni MT"}}>

                  { store.map((stores)=>(
                        <div className="col-12 col-md-3">
                           <Generalcard
                           stores={stores}
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

export default Generalstore;
