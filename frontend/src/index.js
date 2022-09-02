import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './styles/icons/icons.css'
import { store } from './store'
import { Provider } from 'react-redux'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
