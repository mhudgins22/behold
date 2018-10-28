import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

import classes from "./App.css";

import ScrollToTop from "./Utility/scrollToTop";


import Layout from "./containers/Layout/Layout";

library.add(faBars);
library.add(faArrowDown);
library.add(faArrowUp);


class App extends Component {

	compenentDidMount() {
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-MBTGKQS');
	}

	render() {
		return (
			<div className = {classes.App}>
				<noscript>
					<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBTGKQS" height="0" width="0" style= {{display: "none", visibility: "hidden"}}></iframe>
				</noscript>
				<ScrollToTop>
					<Layout />
				</ScrollToTop>
			</div>
		);
	}
}

export default App;
