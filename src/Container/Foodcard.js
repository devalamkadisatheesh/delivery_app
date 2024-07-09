import React from 'react'
import {Link} from 'react-router-dom';
const Foodcard = (props) => {
    const{id,title,imgurl,main}=props.project;
  return (
    <div>
       <div className="card h-100"style={{"box-shadow":"0 6px 20px 0 rgba(0, 0, 0, 0.19)","border-radius":"1px","height":"100px","overflow":"auto"}}>
       <img 
        className="card-img-top"
        src={imgurl}
        alt="Free Image"
        height="170px"/>
        <div className="card-body">
          <h4>{title}</h4>
        <Link to='/form'> <button className='btn btn-primary btn-sm'>Order</button></Link> 
        </div>
      </div>
    </div>
  )
}

export default Foodcard
