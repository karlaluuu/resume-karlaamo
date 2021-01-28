import './App.css';
import React, {Component} from 'react';
import Navigation from './components/navigation.js'
import AnimatedCursor from "react-animated-cursor"

import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  render(){
   return <div >
   <Navigation/>
   <AnimatedCursor
    color='234,113,134'
    />
    
   </div>
  }
}

export default App;
