import React from 'react'
import { Router } from '@reach/router'
// import { Router, Redirect } from '@reach/router'
// import { useSelector } from 'react-redux'

// Pages
// import Login from '../Pages/Login'
import Home from '../Pages/Home'

const App = () => {
    // const isLogged = useSelector((state) => state.isLogged)

    return (
        <Router>
            <Home path="/" exact />
            {/* <Login path="/" exact /> */}
            {/* {isLogged && <Redirect from="/" to="/list" />}
            {!isLogged && <Redirect from="/list" to="/" />} */}
            {/* <Home path="/list" exact /> */}
        </Router>
    )
}

export default App
