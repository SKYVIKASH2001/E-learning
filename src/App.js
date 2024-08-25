
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Course from './Components/Course';
import Registration from './Components/Registration';
import Signin from './Components/Signin';
import Profile from './Components/Profile';
import Andriodd from './Components/Androidd';
import Business from './Components/Business';
import Data from './Components/Data';
import Contact from './Components/Contact';
import Graphic from './Components/Graphic';
import Software from './Components/Software';
import Fullstack from './Components/Fullstack';
import Animation from './Components/Animation';
import Cad from './Components/Cad';
import Mobile from './Components/Mobile';
import Deops from './Components/Deops';








function App(props) {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/about'element={<Aboutus/>}/>
    <Route path='/course'element={<Course/>}/>
    <Route path='/join'element={<Registration/>}/>
    <Route path='/signin'element={<Signin/>}/>
    <Route path='/profile'element={<Profile/>}/>
    <Route path='/android'element={<Andriodd/>}/>
    <Route path='/business'element={<Business/>}/>
    <Route path='/data'element={<Data/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/graphic'element={<Graphic/>}/>
    <Route path='/fullstack'element={<Fullstack/>}/>
    <Route path='/software'element={<Software/>}/>
    <Route path='/animation'element={<Animation/>}/>
    <Route path='/cad'element={<Cad/>}/>
    <Route path='/mobile'element={<Mobile/>}/>
    <Route path='/deops'element={<Deops/>}/>
  

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;