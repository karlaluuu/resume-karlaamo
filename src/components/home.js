import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import Projects from './projects'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";


export default class Homepage extends Component {
    render(){
      return(

    <MDBContainer >
      <MDBCarousel style={{'top': "50px" }}
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >

      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="img/1.jpg"
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h5 className="h5-responsive">Hello! Bonjour! Nǐhǎo! 안녕! <br/>
            <em>I'm Karla! :)</em>
            <br/>
                      <br/>

            <Button variant="secondary" size="sm" className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1myqUKgiarVeO0poaDBoB8vOmbU4z760a/view?usp=sharing">View CV</Button>  
         </h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="img/2.jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
          <h5 className="h5-responsive">I love coding (????????) LOOOL
          <br/>
          <br/>        
            <Button variant="secondary" size="sm" className="btn btn-primary btn-learn" href={'/projects'}>View Previous Projects</Button>
          </h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="img/3.jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
          <h5 className="h5-responsive">I sometimes do photography :)
          <br/>
          <br/>
          <Button variant="secondary" size="sm" className="btn btn-primary btn-learn" href="https://kmphotog.jimdofree.com/">View Photography Site</Button>
          </h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
)
}
}