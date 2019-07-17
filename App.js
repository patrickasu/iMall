import React, { Component } from 'react';
import './style/mystyle.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/homepage';
import Icons from './components/icons';
import Navbar from './components/navbar';
import Intro from './components/intro';
import Ipads from './components/ipads';
import Macs from './components/mac';
import Icloud from './components/icloud';
import WhereToBuy from './components/wheretobuy';
import IphoneContainer from './components/iphonescontainer.js';
import Googlemap from './components/googlemap';
import Footer from './components/footer';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Icons />
          <Navbar />
          <Intro />
          <Route exact path="/" render={()=> <Home />}/>
          <Route path="/ipads" render={()=> <Ipads />}/>
          <Route path="/mac" render={()=> <Macs />}/>
          <Route path="/icloud" render={()=> <Icloud />}/>
          <Route path="/wheretobuy" render={()=> <WhereToBuy />}/>
          <Route path="/" render={()=> <IphoneContainer />}/>
          <Googlemap />
          <Footer />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
