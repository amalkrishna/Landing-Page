import React from 'react';

function ProductImg(props) {

  return (
    <div className="img">
      <img src={process.env.PUBLIC_URL + props.productImg} alt="productImg"/>
    </div>
  );

}

export default ProductImg;
