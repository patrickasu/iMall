import React from 'react';
import Myparallax from '../components/myparallax'
const Iphone = (props) => {
    return (
      
            <div className="main-content">
                <div className="container">
                    <Myparallax />
                    <div className="my-iphone-image" style={{ backgroundImage: "url(" + props.iphoneimage + ")" }}></div>
                    <div className="my-iphone-image" style={{ backgroundImage: "url(" + props.iphoneimg + ")" }}></div>
                    <h2 className="iphone-image-name">{props.name}</h2>
                    <p className="iphone-description">{props.description}</p>
                </div>
            </div>
        
    );
}

export default Iphone;
