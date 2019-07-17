import React from 'react';
import {IpadList} from '../data/ipads';
import Myparallax from './myparallax'
import Music from './music';
import { Link } from 'react-router-dom';

const Ipads = (props) => {
    let ipads = IpadList.map((ipad) => {
      return (
        <div className="ipads-container">
          <Link to={`/ipads/${ipad.url}`}><div className="my-ipads-image" style={{ backgroundImage: "url(" + ipad.img_src + ")" }}></div></Link>
          <h3 className="ipads-name">{ipad.name}</h3>
          <p className="ipads-description">{ipad.description}</p>
        </div>
      );
    });

    return (
      <div className="main-content">
        <h1 className="ipads-title">{props.title}</h1>
        <div className="container">
          <Myparallax />
          {ipads}
          <Music />
        </div>
      </div>
    );
}

export default Ipads;