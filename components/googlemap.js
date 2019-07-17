import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Googlemap extends Component {
	render() {
		return(
			<Map
	          google={this.props.google}
	          style={{width: '100%', height: '350px'}}
	          initialCenter={{
	            lat: 6.4698,
	            lng: 3.5852
	          }}
	          zoom={15}
	          onClick={this.onMapClicked}
        	>
 
        	<Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        	<InfoWindow onClose={this.onInfoWindowClose}>
            	
        	</InfoWindow>
      		</Map>
		);
	}
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyD7a7-aQef-TvQIqsNnuJAtZpSCWkXWq0w")
})(Googlemap)