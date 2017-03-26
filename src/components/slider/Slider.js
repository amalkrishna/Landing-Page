import React from 'react';
import {Carousel,Row,Col} from 'react-bootstrap';

function Slider(props) {

  return (
    <Row className="gutter-0 overflowy" id="myCarousel1" data-ride="carousel">
      <Col sm={9}>
        <Carousel id="myCarousel" >
          <Carousel.Item data-slide-number="1">
            <img width={900} height={480} alt="900x500" src={process.env.PUBLIC_URL + '/images/slider/slider1.png'}/>
            <Carousel.Caption>
              <h1>Replay Jeans Hyperflex</h1>
              <p>Skinny Comfort Ultra Stretch Light Wash</p>
                <div className="btn">
                  <div className="left">$145</div>
                  <div className="right">BUY NOW</div>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item data-slide-number="2">
            <img width={900} height={480} alt="900x500" src={process.env.PUBLIC_URL + '/images/slider/slider1.png'}/>
            <Carousel.Caption>
              <h1>Replay Jeans Hyperflex</h1>
              <p>Skinny Comfort Ultra Stretch Light Wash</p>
              <div className="btn">
                <div className="left">$145</div>
                <div className="right">BUY NOW</div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item data-slide-number="3">
            <img width={900} height={480} alt="900x500" src={process.env.PUBLIC_URL + '/images/slider/slider1.png'}/>
            <Carousel.Caption>
              <h1>Replay Jeans Hyperflex</h1>
              <p>Skinny Comfort Ultra Stretch Light Wash</p>
                <div className="btn">
                  <div className="left">$145</div>
                  <div className="right">BUY NOW</div>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item data-slide-number="4">
            <img width={900} height={480} alt="900x500" src={process.env.PUBLIC_URL + '/images/slider/slider1.png'}/>
            <Carousel.Caption>
              <h1>Replay Jeans Hyperflex</h1>
              <p>Skinny Comfort Ultra Stretch Light Wash</p>
                <div className="btn">
                  <div className="left">$145</div>
                  <div className="right">BUY NOW</div>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col sm={3}>
        <ul className="hide-bullets">
            <li className="row" data-target="#myCarousel1" data-slide-to="1">
                <a className="thumnail over" id="carousel-selector-0"><img src={process.env.PUBLIC_URL + '/images/slider/sl1.png'} alt=""/></a>
            </li>

            <li className="row" data-target="#myCarousel1" data-slide-to="2">
                <a className="thumnail over" id="carousel-selector-1"><img src={process.env.PUBLIC_URL + '/images/slider/sl2.png'} alt=""/></a>
            </li>

            <li className="row" data-target="#myCarousel1" data-slide-to="3">
                <a className="thumnail over" id="carousel-selector-2"><img src={process.env.PUBLIC_URL + '/images/slider/sl3.png'} alt=""/></a>
            </li>

            <li className="row" data-target="#myCarousel1" data-slide-to="4">
                <a className="thumnail over" id="carousel-selector-3"><img src={process.env.PUBLIC_URL + '/images/slider/sl4.png'} alt=""/></a>
            </li>

        </ul>
      </Col>
  </Row>
  );

}

export default Slider;
