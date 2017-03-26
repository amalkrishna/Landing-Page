import React from 'react';
import ProductList from './ProductList';
import ProductTitle from './Product_title';
import ProductImg from './Product_img';
import ProductNotif from './Product_notif';
import ProductPrice from './Product_price';
import { Grid,Row,Col } from 'react-bootstrap';

function Product(props) {

  function renderProductList(key) {
    return (
      <Col md={3} xs={6} className="productItem">
      <ProductTitle
        key={key.id}
        productTitle={key.title}
      />
      <ProductImg
        productImg={key.imgUrl}
      />
      <Row>
      <ProductNotif
        productNotif={key.notif}
      />
      <ProductPrice
        productPrice={key.price}
        productMRP={key.mrp}
      />
      </Row>
      </Col>
    );
  }

  return (
    <Grid fluid={true}>
      <Row className="productList gutter-0">
          {ProductList.map(renderProductList)}
      </Row>
      </Grid>
  );
}


export default Product;
