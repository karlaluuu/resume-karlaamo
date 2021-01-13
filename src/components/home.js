import React, {Component} from "react";
import {Carousel} from 'react-bootstrap';
import Projects from './projects'


export default class Homepage extends Component {
    render(){
return(
<Carousel>
<Carousel.Item interval={3000}>
<img className="homeimg" style={{'height': "835px", 'padding-left': "100px", 'padding-right': "100px"}} src={'img/1.jpg'} alt="homeimg"/>
<Carousel.Caption>
<h3>Hello! Bonjour! Nǐhǎo! 안녕! <br></br>
<em>I'm Karla! :)</em></h3>
<br></br>
  <p><a class="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1pnOdpAU2tg26OWRIwtHbqp3L7oCr4Wib/view?usp=sharing"><b>View CV</b></a></p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={3000}>
<img className="homeimg" src={'img/2.jpg'} style={{'height': "835px", 'padding-left': "100px", 'padding-right': "100px"}} alt="homeimg"/>
<Carousel.Caption>
<h3>I love multitasking. ex. like coding while working lol :p
<br></br>
<br></br>
  <p><a class="btn btn-primary btn-learn" href={'/projects'}><b>View Previous Projects</b></a></p>
</h3>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={3000}>
<img className="homeimg" src={'img/3.jpg'}style={{'height': "835px", 'padding-left': "100px", 'padding-right': "100px"}} alt="homeimg"/>
<Carousel.Caption>
<h3>I also do photography when I'm bored. :)
<br></br>
<br></br>
  <p><a class="btn btn-primary btn-learn" href="https://kmphotog.jimdofree.com/"><b>View Photography Site</b></a></p>
</h3>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
)
}
}