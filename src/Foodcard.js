import React from 'react'

const Foodcard = (props) => {
    const{id,title,imgurl,main}=props.project;
  return (
    <div> 
        satheesh kumar koilakonda
       <div className="card h-100"style={{"box-shadow":"0 6px 20px 0 rgba(0, 0, 0, 0.19)","border-radius":"0px","height":"300px","overflow":"auto"}}>
       <img 
        className="card-img-top"
        src={imgurl}
        alt="Free Image"
        height="200px"/>
        <div className="card-body">
         <button className="btn btn-primary">Order</button>
        </div>
      </div>
    </div>
  )
}

export default Foodcard
