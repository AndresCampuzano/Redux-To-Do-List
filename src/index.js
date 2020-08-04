import React from 'react'
import ReactDOM from 'react-dom'

// Styles
import { ThemeProvider } from 'styled-components'
import Variables from './assets/styles/Variables'
import GlobalStyles from './assets/styles/GlobalStyles'
// App
// import App from './Pages/Home';
import App from './routes/App'

import * as serviceWorker from './serviceWorker'

// Context > just for modal (for now)
import { ContextModal } from './ContextModal'
import { ContextId } from './ContextId'

// Redux
import { createStore } from 'redux'
import { AllReducers, MainEnhancer } from './reducers'
import { Provider } from 'react-redux'

const myStore = createStore(AllReducers, MainEnhancer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={myStore}>
            <ContextModal>
                <ContextId>
                    <ThemeProvider theme={Variables}>
                        <GlobalStyles />
                        <App />
                    </ThemeProvider>
                </ContextId>
            </ContextModal>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
