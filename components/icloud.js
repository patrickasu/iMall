import React from 'react';
import Myparallax from '../components/myparallax'
import Mac from '../components/mac'

const Icloud = () => (
	<div className="main-content">
		<Myparallax />
		<h2 className="icloud-header">Welcome to iCloud</h2>
		<div className="icloud-col">
			<div className="icloud-image"></div>
			<div className="icloud-des">
				<h1 className="icloud-text">iCloud</h1>
				<p className="my-icloud-text">iCloud is built into every Apple device and keeps your stuff safe, up to date, and available wherever you are. And it works automatically, so all you have to do is keep doing what you love. Everyone gets 5GB of free iCloud storage to start, and it’s easy to add more at any time. With iCloud Photo Library, you can browse, search, and share all the photos and videos from any of your devices, whether they were taken yesterday or years ago.</p>
			</div>
		</div>
		<Mac />
	</div>
);

export default Icloud;