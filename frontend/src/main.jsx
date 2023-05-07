import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import reduxStore from './redux/index.js'
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
