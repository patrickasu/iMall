import React from 'react';
import {IphoneList} from '../data/iphones';
import Iphone from './iphone';
import Iphones from './iphones';
import { Route} from 'react-router-dom';

const IphoneContainer = (props) => {
    let iphonesUrl = IphoneList.map((myiphones,i) => {
        return (
          <Route key={i} path={`/iphones/${myiphones.url}`} render={() => <Iphone name={myiphones.name} iphoneimage={myiphones.my_img_src} iphoneimg={myiphones.my_image_src}description={myiphones.description}/>} />
        );
      });

    return (
        <React.Fragment>
          <Route exact path="/iphones" render={() => <Iphones />} />
          {iphonesUrl}
        </React.Fragment>
    );
}

export default IphoneContainer;