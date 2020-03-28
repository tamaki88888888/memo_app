import { createStore , applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from 'firebase';

//firebase 設定
var config = {
	apiKey:'APIキー',
	authDomain: 'プロジェクト.firebaseapp.com',
	databaseURL: 'https://プロジェクト.firebaseio.com',
	propjectId:'プロジェクト.appspot.com',
	messagingSenderId: 'ID番号'
};

//Firebase初期化
var fireapp;
try {
	fireapp = firebase.initializeApp(config);
} catch(error) {
	console.log(error.message);
}
export default fireapp;

//ステート初期値
const initial = {
	login:false,
	username:'(click here!)',
	email:'',
	data:[],
	items:[]
}

//レデューサー
function fireReducer(state = initial, action) {
	switch(action.type){
		//ダミー
		case 'UPDATE_USER':
			return acition.value;
		//デフォルト
		default:
			return state;
	}
}

//initStore関数
export function initStore(state = initial){
	return createStore(fireReducer, state, applyMiddleware(thunkMiddleware))
}


