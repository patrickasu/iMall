import React from 'react';
import { Route } from 'react-router-dom'
import Compare from '../components/compare';
import Games from '../components/games';
import Parallax from '../components/parallax';
import Iphones from '../components/iphones';
import Myparallax from '../components/myparallax';
import Music from '../components/music';


const Home = () => {
	return (
		<React.Fragment>
          <Route path="/" render={()=> <Compare title="iCloud" discription="The best place for all your photos, files, and more. iCloud is built into every Apple device and keeps your stuff safe, up to date, and available wherever you are." />}/>
          <Games />
          <Parallax />
          <Iphones />
          <Myparallax />
          <Music />
		</React.Fragment>
	)
}

export default Home;