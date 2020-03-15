import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import MemoStore from './memo/Store'  //(水道管)ストアからMemoStoreという名前でインポ

ReactDOM.render(
	<Provider store={MemoStore}>  
		<App />
	</Provider>,
	document.getElementById('root')
);

