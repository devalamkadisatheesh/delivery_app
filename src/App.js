import React from 'react';
import Form from './Form';
import {Provider} from './Context';
import About from './Container/About';
import Contact from './Container/Contact';
import Fooditems from './Container/Fooditems';
import Bookstore from './Container/Bookstore';
import Generalstore from './Container/Generalstore';
import Form3 from './Form3';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Form1 from './Form1';
import Form2 from './Form2';
import Head from './Container/Head';
import Scrolltop from './Scrolltop';
import Home from './Home';
function App() {
  return(
    <Provider>
     
   <BrowserRouter>
   <Scrolltop/>
   <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/about"element={<About/>}/>
    <Route path="/contact"element={<Contact/>}/>
    <Route path="/fooditems"element={<Fooditems/>}/>
    <Route path="/products"element={<Bookstore/>}/>
    <Route path="/store"element={<Generalstore/>}/>
    <Route path="/form"element={<Form/>}/>
    <Route path="/form1"element={<Form1/>}/>
    <Route path="/form2"element={<Form2/>}/>
    <Route path="/form3"element={<Form3/>}/>
    <Route path="/head"element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  </Provider>
  );
}
export default App;
