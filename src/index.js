import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import App from "./App";
import store from './redux/store'
import worker from "./api/mockServer"
import lsService from "./services/localStorage"
import * as serviceWorker from "./serviceWorker";

// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
    // Start with unAuthourized user
    lsService.setItem("authStatus", "unAuthourized")

    // Start our mock API server
    await worker.start({
        onUnhandledRequest: 'bypass'
    })

    // Initial app redendering
    ReactDOM.render(
        // <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>,
        // </React.StrictMode>,
        document.getElementById("root")
    );

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
}

start();