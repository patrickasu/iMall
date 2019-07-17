import React from 'react';
import {MacList} from '../data/mac';
import Myparallax from './myparallax'
import Compare from '../components/compare';
import { Link, Route } from 'react-router-dom';

const Macs = (props) => {
    let macs = MacList.map((mac) => {
      return (
        <div className="mac-container">
          <Link to={`/mac/${mac.url}`}><div className="my-mac-image" style={{ backgroundImage: "url(" + mac.img_src + ")" }}></div></Link>
          <h3 className="mac-name">{mac.name}</h3>
          <p className="ipads-description">{mac.description}</p>
        </div>
      );
    });

    return (
      <div className="main-content">
        <h1 className="macs-title">{props.title}</h1>
        <div className="container">
          <Myparallax />
          {macs}
          <Route path="/mac" render={()=> <Compare title="iCloud" discription="The best place for all your photos, files, and more. iCloud is built into every Apple device and keeps your stuff safe, up to date, and available wherever you are." />}/>
        </div>
      </div>
    );
}

export default Macs;