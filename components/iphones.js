import React from 'react';
import {IphoneList} from '../data/iphones';
import { Link } from 'react-router-dom';

const Iphones = (props) => {
    let iphones = IphoneList.map((iphone) => {
      return (
        <div className="iphones-container">
          <Link to={`/iphones/${iphone.url}`}><div className="iphones-image" style={{ backgroundImage: "url(" + iphone.img_src + ")" }}></div></Link>
          <h2 className="iphones-name">{iphone.name}</h2>
          <h3 className="iphones-model">{iphone.model}</h3>
          <Link to={`/iphones/${iphone.url}`}><button className="iphones-btn">BUY</button></Link>
        </div>
      );
    });

    return (
      <div className="main-content">
        <h1 className="event-title">COMPARE MODELS</h1>
        <div className="container">
          {iphones}
        </div>
      </div>
    );
}

export default Iphones;