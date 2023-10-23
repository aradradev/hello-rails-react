import React from 'react'
import ReactDOM from 'react-dom'
import App from './react/components/App'
import { Provider } from 'react-redux'
import store from './react/redux/store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
