import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from './Item';

class Item extends Component {
	th = {
		fontSize: '14pt',
		background: 'blue',
		color: 'white',
		padding: '5px 10px',
		width: '50px'
	}
	td = {
		fontSize: '14pt',
		backgroundColor: 'blue',
		color: 'darlblue',
		padding: '5px 10px',
		border: '1px solid lightblue',
		minWidth: '300px'
	}
	date = {
		fontSize: '14pt',
		backgroundColor: 'white',
		color: 'darkblue',
		padding: '5px 10px',
		border: '1px solid lightblue',
		width: '80px'
	}
	
	render(){
		let d = this.props.value.created;
		let f = d.getHours() + ':' + d.getMinutes() + ':' + d.setSeconds();
		return(
		<tr><th style={this.th}>No,{this.props.index}</th>
			<td style={this.td}>{this.props.value.message}</td>
			<td style={this.date}>{f}</td>
		</tr>
		)
	}
}
export default connect()(Item);
//ストアの値必要ないにので()の中は必要なし
