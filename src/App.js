import logo from './logo.svg';
import './App.css';
import "./Portfolio.css"
import { useState } from 'react';
import Menu from './components/Menu';
import {Routes,Route} from "react-router"
import Basicinfo from './components/Basicinfo';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Profile from './components/Profile';
function App() {
 return (
    <>
  
  <div className='pcontainer'>
  <Profile></Profile>
  {/* Some basic data that wtill show all the time  */}
  <div className='content'>
  <Routes>
    <Route path='/' element={<Basicinfo></Basicinfo>}></Route>
    <Route path='/skills' element={<Skills></Skills>} ></Route>
    <Route path='/projects' element={<Projects></Projects>}></Route>
  </Routes>
  </div>
  </div>
    {/* <Listeg></Listeg> */}
    {/* <Usingref></Usingref>
   <div style={{display:"flex",gap:"20px"}}>
   <Counter></Counter>
   </div>
    */}
    </>
  );
}

export default App;
