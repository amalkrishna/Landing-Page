import React, { Component } from 'react';
import Navbars from './components/navbar/Navbars';
import Slider from './components/slider/Slider';
import Product from './components/product/Product';
import Brands from './components/brands/Brands';
import Footer from './components/footer/Footer';
import {navMenu} from './scripts.js'

class App extends Component {
  componentDidMount() {
    navMenu();
  }



  render() {
    return (
      <div className="App">
        <Navbars />
        <Slider />
        <Product  />
        <Brands />
        <Footer />
      </div>
    );
  }
}

export default App;
