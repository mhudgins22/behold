import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import classes from "./App.css";

import ScrollToTop from "./Utility/scrollToTop";


import Layout from "./containers/Layout/Layout";

library.add(faBars);


class App extends Component {
	render() {
		return (
			<div className = {classes.App}>
				<ScrollToTop>
					<Layout />
				</ScrollToTop>
			</div>
		);
	}
}

export default App;
