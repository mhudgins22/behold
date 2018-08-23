import React, { Component } from 'react';


import Layout from "./containers/Layout/Layout";


class App extends Component {
	render() {
		return (
			<div>
				<Layout redirectPath = {this.props.redirectPath}/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		redirectPath: state.auth.redirectPath
	}
}

export default App;
