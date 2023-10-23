import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>
            <h1>Hello React in Rails! It's really funny.</h1>
            <p>Small paragraph</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))