import React from 'react';
import { Route } from 'react-router-dom';
import Compare from '../components/compare'
import Myparallax from '../components/myparallax'

const WhereToBuy = () => {
	return (
		<React.Fragment>
          <Myparallax />
          <Route path="/wheretobuy" render={()=> <Compare title="Where to Buy" header="PURCHASE" discription="iPhone is available at Glo and 9mobile locations across Nigeria.Which means there's probably one near you." />}/>
          </React.Fragment>
	)
}

export default WhereToBuy;