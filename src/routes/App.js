import React from 'react'
import { Router } from '@reach/router'

// Pages
import Login from '../Pages/Login'
import Home from '../Pages/Home'

const App = () => {
    return (
        <Router>
            <Login path="/" exact />
            <Home path="/list" exact />
        </Router>
    )
}

export default App
