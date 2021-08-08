import React from 'react'
import ReactDOM from 'react-dom'
import './assets/index.css'
import App from './utils/App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { store } from './utils/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
reportWebVitals()
