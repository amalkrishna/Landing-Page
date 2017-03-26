import React from 'react';
import BrandList from './BrandList';
import { Row,Col } from 'react-bootstrap';


function Brands(props) {


  return (
    <div>
      <Row className="brandList gutter-0">
        <Col xs={12} md={6}>
              <Row className="gutter-0">
                  <Col xs={3} md={3} className="brandImg">
                      <img src={process.env.PUBLIC_URL + BrandList[0].imgUrl} alt="productImg"/>
                  </Col>
                  <Col xs={3} md={3} className="brandImg">
                      <img src={process.env.PUBLIC_URL + BrandList[1].imgUrl} alt="productImg"/>
                  </Col>
                  <Col xs={3} md={3} className="brandImg">
                      <img src={process.env.PUBLIC_URL + BrandList[2].imgUrl} alt="productImg"/>
                  </Col>
                  <Col xs={3} md={3} className="brandImg">
                      <img src={process.env.PUBLIC_URL + BrandList[3].imgUrl} alt="productImg"/>
                  </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
                  <Row className="gutter-0">
                      <Col xs={3} md={3} className="brandImg">
                          <img src={process.env.PUBLIC_URL + BrandList[4].imgUrl} alt="productImg"/>
                      </Col>
                      <Col xs={3} md={3} className="brandImg">
                          <img src={process.env.PUBLIC_URL + BrandList[5].imgUrl} alt="productImg"/>
                      </Col>
                      <Col xs={3} md={3} className="brandImg">
                          <img src={process.env.PUBLIC_URL + BrandList[6].imgUrl} alt="productImg"/>
                      </Col>
                      <Col xs={3} md={3} className="brandImg">
                          <img src={process.env.PUBLIC_URL + BrandList[7].imgUrl} alt="productImg"/>
                      </Col>
                </Row>
          </Col>

      </Row>
    </div>

  );
}


export default Brands;
