import './App.css';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Card from './Card';

import {
  Collapse,
  Ripple,
  initTE,
} from "tw-elements";


function App() {


  
  initTE({ Collapse, Ripple });
  return (
    <>
<Nav/>
<Main/>
<Card/>
<Footer/>



    </>
  );
}

export default App;
