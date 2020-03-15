import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

//ステートのマッピング
function mappingState(state) {
	return state;
}

//Appコンポーネントを作成する

class App extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<Num />
				<Red />
				<Blue />
			</div>
		)
	}
}

//ストアのコネクト
App = connect() (App);

//メッセージ表示のコンポーネント
class Num extends Component {
	style = {
		fontSize: '20pt',
		padding: '20px 5px'
	}

	render(){
		return (
			<p style={this.style}>
				{this.props.message}: {this.props.counter}
			</p>
		)
	}
}

//ストアのコネクト
Num = connect(mappingState) (Num);

//ボタン表示のコンポーネント　
class Red extends Component {
	style = {
		fontSize:'16pt',
		padding:'5px 10px'
	}

	constructor(props){
		super(props);
		this.doAction = this.doAction.bind(this)
	}

	//ボタンクリックでディスパッチを実行
	doAction(e){
			this.props.dispatch({ type:'DOWN' })
	}

	render(){
		return (
			<button style={this.style}
				onClick={this.doAction}>
			あか	
			</button>
		)
	}
}

//ストアのこね
Red = connect() (Red);

//ボタン表示のコンポーネント　
class Blue extends Component {
	style = {
		fontSize:'16pt',
		padding:'5px 10px'
	}

	constructor(props){
		super(props);
		this.doAction = this.doAction.bind(this)
	}

	//ボタンクリックでディスパッチを実行
	doAction(e){
			this.props.dispatch({ type:'UP' })
	}

	render(){
		return (
			<button style={this.style}
				onClick={this.doAction}>
				青	
			</button>
		)
	}
}

//ストアのこね
Blue = connect() (Blue);


export default connect()(App);

