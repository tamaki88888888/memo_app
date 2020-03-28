import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/style';

class Layout extends Component {
	render(){
		return (<div>
			{style}
			<Header header={this.props.title}/>
			{this.props.children}
			<Footer footer='copyright SYODA-Tuyano.'/>
		</div>);
	}
}
export default Layout;

