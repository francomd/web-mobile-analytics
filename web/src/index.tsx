import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import { GTMProvider } from './context/TagManagerContext'

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <GTMProvider>
                <Router>
                    <App />
                </Router>
            </GTMProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
