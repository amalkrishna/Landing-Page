import React from 'react';
import { Col } from 'react-bootstrap';

function ProductNotif(props) {
  function checkNotif() {
    if(props.productNotif){
    return <img src={process.env.PUBLIC_URL + props.productNotif} alt="productImg"/>
    }
  }
  return (
    <Col md={4} sm={4} xs={4}>
      {checkNotif()}
    </Col>
  );

}

export default ProductNotif;
