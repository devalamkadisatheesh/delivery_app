import React from 'react'
import Header from './Header';
import Footer from './Footer';
const About = () => {
  return (
    <div>
      <center>
        <Header/>
       <div className='card overflow-auto '>
            <img  className="imgs"src="https://th.bing.com/th/id/R.24d1b25b5cf8c63372898cf8cac1b6b2?rik=PrfW2bCSVg36Sg&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2foriginals%2f2014%2fBackgrounds_Wallpaper_black_and_white_waves_078543_.jpg&ehk=WFeDZeHpOwJDGaWRJtqElfRJbkF22oyhBi0zMxn8so0%3d&risl=&pid=ImgRaw&r=0"width="100%"height="600px"/>
            <div className="card-img-overlay text-center"style={{"color":"white","margin-top":""}}>
        < div style={{"font-size":"53px","font-family":"Monotype Corsiva"}}>
        <p>Arriver</p>
        </div>
        <div style={{"text-align":"justify","font-family":"Bernard MT Condensed","font-size":"21px"}} className='container'>
          <p>
            Heartly welcome to you, Mainly this web is creation for you Any items order in form(item name is no need to be here) i will buy items your choosing restaurent(form) and delivery within 30 minutes, pay money for delivery charges(5Rs) and item charges(depends on your choosing item).
            Not only order and your forgotting items or products just click missing items and fill form then i will bring you closer and pay only 10Rs(missing items)
          </p>
        </div>
        </div>
    </div>
    <Footer/>
    </center>
    </div>
  )
}

export default About;
