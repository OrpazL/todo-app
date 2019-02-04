import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Store from './Store';
import { Provider } from 'mobx-react';

import DevTools, { configureDevtool } from 'mobx-react-devtools';

configureDevtool({
    // Turn on logging changes button programmatically:
	logEnabled: true
	// Turn off displaying components updates button programmatically:
	//   updatesEnabled: false,
	// Log only changes of type `reaction`
	// (only affects top-level messages in console, not inside groups)
	//   logFilter: change => change.type === 'reaction'
});

const store = window.store = new Store();
ReactDOM.render(
	<Provider store={store}>
		<React.Fragment>
			<App />
			<DevTools />
		</React.Fragment>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
if (process.env.NODE_ENV === 'production') serviceWorker.register();
else serviceWorker.unregister();
