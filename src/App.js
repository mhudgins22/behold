import React, { Component } from 'react';
import ScrollToTop from "./Utility/scrollToTop";


import Layout from "./containers/Layout/Layout";


class App extends Component {
	render() {
		return (
			<div>
				<ScrollToTop>
					<Layout/>
				</ScrollToTop>
			</div>
		);
	}
}

export default App;
