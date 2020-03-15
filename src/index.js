import React from 'react';
import ReactDOM from 'react-dom' 
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

//ステートとは初期値のことだ

let init = {
	counter:0,
	message: '好きなボタンを押して！',
}

//レデューサーはメッセージによって別のアクションをさせる分岐のこと 
function counter(state = init, action){
	switch(action.type){
		case 'UP':
		return{
			counter: state.counter + 1,
			message:'増えた！'
		};
		case'DOWN':
		return{
			counter: state.counter - 1,
			message:'減った！'
		};
		default:
		return state;
	}
}


//ストアを作
let store = createStore(counter);

//表示をレンダリング
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);


