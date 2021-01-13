import './App.css';
import React, {Component} from 'react';
import Navigation from './components/navigation.js'
import AnimatedCursor from "react-animated-cursor"
import Homepage from './components/home.js'

import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  render(){
   return <div >
   <Navigation/>
   <ParallaxProvider>
   <AnimatedCursor
    color='234,181,168'
    />
  
    </ParallaxProvider>
   </div>
  }
}

export default App;
