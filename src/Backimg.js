import React from 'react'
import './App.css';
import Footer from './Container/Footer';
import { Link } from 'react-router-dom';
const Backimg = () => {
  return (
    <div>
      <center>
        <div className='card overflow-auto ' >
            <img  className="imgs"src="https://pre00.deviantart.net/ae81/th/pre/f/2018/211/d/5/3d_black_cube_by_angeliababy-dcinsk5.jpg"width="100%"height="600px"/>
            <div className="card-img-overlay text-center"style={{"color":"white","margin-top":""}}>
        < div style={{"font-size":"53px","font-family":"Monotype Corsiva"}}>
        <p>Any Kind of Help for you</p>
        <p>Delivering the items</p>
        </div>
        <div className='navbar container ' style={{"font-family":"Monotype Corsiva","button-radius":"10px" }}>
       <Link to="/fooditems"> <button className='btn btn-outline-warning'style={{"border-radius":"50px"}}> <h3>Food Items</h3></button> </Link>
       <Link to="/products">  <button className='btn btn-outline-warning'style={{"border-radius":"50px"}}>   <h3>Book Stores</h3></button></Link>
      <Link to='/form3'>  <button className='btn btn-outline-warning'style={{"border-radius":"50px"}}>   <h3>Missing items</h3></button>  </Link>
        <Link to="/store"><button className='btn btn-outline-warning'style={{"border-radius":"50px"}}>   <h3>All items</h3></button>  </Link>
        </div><br/><br/>
        <div className=" text-left  text-light" style={{"font-family":"Monotype Corsiva","button-radius":"10px","font-size":"25px"}}>
         <p className='special'> Special Offers for you</p> 
       <div className="row text-center  py-5  d-flex flex-nowrap overflow-auto"style={{"overflow":"auto","color":"white"}}>

<div className="col-12 col-md-4">
<div className="card-shadow h-100 text-center " >
<img src="https://spicegardenaz.com/wp-content/uploads/2020/04/Mixed-Tandoori-Grill.jpg" width="100%"height="200px" />
<div className="card-img-overlay">
<h3>10% discount of every item(more than 100Rs)</h3><br/>
<Link to='/form'><button className='btn btn-primary'>Order</button></Link>
</div>
</div>
</div>

<div className="col-12 col-md-4">
<div className="card-shadow h-100 text-center" >
<img src="https://th.bing.com/th/id/OIP.p_EN5pAq4aMvqA6gZfCHWgAAAA?pid=ImgDet&rs=1" width="100%"height="200px" />
<div className="card-img-overlay">
<h3>5% discount of every item(more than 100Rs)</h3><br/>
<Link to='/form1'><button className='btn btn-primary'>Order</button></Link>
</div>
</div>
</div>

<div className="col-12 col-md-4">
<div className="card-shadow h-100" >
<img src="https://www.newsmax.com/CMSPages/GetFile.aspx?guid=2720e82c-dcc2-4efe-b2f7-4422718da549&SiteName=Newsmax"width="100%"height="200px" />
<div className="card-img-overlay">
<h3>5% discount of every item(more than 100Rs)</h3><br/>
<Link to='/form'><button className='btn btn-primary'>Order</button></Link>
</div>
</div>
</div>
</div>

</div>
<div  style={{color:"black","margin":"0px",'padding':"0px"}}>
<Footer/>
</div>

        </div>
        <div >
          </div>
     </div>
      </center>
    </div>
  )
}

export default Backimg;
