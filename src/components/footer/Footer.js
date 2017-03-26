import React from 'react';
import { Row,Col } from 'react-bootstrap';
import SiteMapData from './SiteMapData';
import SiteMap from './SiteMap';


function Footer(props) {

  function renderSiteMap(key) {
    return (
      <SiteMap
        key={key.id}
        linkTitle={key.title}
      />
    );
  }

  return (
    <div className="footer">
        <Row className="">
          <Col md={12} className="sitemap">
            <ul>
                {SiteMapData.map(renderSiteMap)}
            </ul>
          </Col>
        </Row>
        <Row className="footerData">
          <Col md={4}>
            <div className="about">
              <h5><i>BuyBlue</i></h5>
              <p><i>&copy; 2015 DivanRaj UI Kit. <br/>Allrights resrved.</i></p>
            </div>
          </Col>
          <Col md={4}>
            <div className="subscribe">
              <input type="text" name="subscribe" placeholder="Signup for new style news"/>
              <button>
                <img src={process.env.PUBLIC_URL + '/images/footer/arr.png'} alt="productImg"/>
              </button>
            </div>
            <div className="supportLinks">
              <span>Privacy &amp; Cookies</span>
              <span>Terms &amp; Conditions</span>
              <span>Accessibility</span>
            </div>
          </Col>
          <Col md={4} className="links">
            <Row  className="socialLinks">
              <Col md={3} xs={3}>
                <img src={process.env.PUBLIC_URL + '/images/footer/tw.png'} alt="SocialImg"/>
              </Col>
              <Col md={3} xs={3}>
                <img src={process.env.PUBLIC_URL + '/images/footer/insta.png'} alt="SocialImg"/>
              </Col>
              <Col md={3} xs={3}>
                <img src={process.env.PUBLIC_URL + '/images/footer/pin.png'} alt="SocialImg"/>
              </Col>
              <Col md={3} xs={3}>
                <img src={process.env.PUBLIC_URL + '/images/footer/fb.png'} alt="SocialImg"/>

              </Col>
            </Row>
            <Row className="paymentLinks gutter-0">
              <Col md={4} xs={4}>
                <img src={process.env.PUBLIC_URL + '/images/footer/visa.png'} alt="SocialImg"/>
              </Col>
              <Col md={4} xs={4}>
                <img src={process.env.PUBLIC_URL + '/images/footer/master.png'} alt="SocialImg"/>
              </Col>
              <Col md={4} xs={4}>
                <img src={process.env.PUBLIC_URL + '/images/footer/pypl.png'} alt="SocialImg"/>
              </Col>
            </Row>
          </Col>
        </Row>

    </div>
  );

}

export default Footer;
