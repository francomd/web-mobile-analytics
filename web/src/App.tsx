import { useEffect } from 'react'
import { ThemeProvider } from 'theme-ui'
import { defaultTheme } from './ui/theme'
import { AuthProvider } from './context/AuthContext'
import { Route, Routes, useLocation } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { ProtectedRoute } from './utils/ProtectedRoute'
import { GTMProvider, useGTM } from './context/TagManagerContext'

export const App = () => {
    const { dataLayer } = useGTM()
    let location = useLocation()

    const routesArr = [
        {
            path: '/',
            title: 'Dashboard',
            component: <Dashboard />,
            private: true,
        },
        {
            path: '/signup',
            title: 'SignUp',
            component: <SignUp />,
            private: false,
        },
        {
            path: '/login',
            title: 'Login',
            component: <Login />,
            private: false,
        },
    ]

    useEffect(
        () => {
            dataLayer({
                dataLayer: {
                    event: 'pageview',
                    page: {
                        path: location.pathname,
                        title: routesArr.find((el) => el.path === location.pathname)?.title || window.document.title,
                    },
                },
            })
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [location]
    )
    return (
        <ThemeProvider theme={defaultTheme}>
            <GTMProvider>
                {/* <GTMPageEvent /> */}
                <AuthProvider>
                    <Routes>
                        <>
                            {routesArr.map(({ path, component, private: isPrivate }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    element={<ProtectedRoute isPrivate={isPrivate}>{component}</ProtectedRoute>}
                                />
                            ))}
                        </>
                    </Routes>
                </AuthProvider>
            </GTMProvider>
        </ThemeProvider>
    )
}

export default App
