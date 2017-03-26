import React from 'react';
import { Col } from 'react-bootstrap';

function ProductPrice(props) {
  function checkMRP() {
    if(props.productMRP){
      return props.productMRP;
    }
  }
  return (
    <div className="price">
      <Col md={4} sm={4} xs={4}>{props.productPrice}</Col>
      <Col md={4} sm={4} xs={4} className="mrp">{checkMRP()}</Col>
    </div>
  );

}

export default ProductPrice;
