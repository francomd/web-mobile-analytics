import { useEffect } from 'react'
import { ThemeProvider } from 'theme-ui'
import { defaultTheme } from './ui/theme'
import { useAuth } from './context/AuthContext'
import { Route, Routes, useLocation } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { ProtectedRoute } from './utils/ProtectedRoute'
import { useGTM } from './context/TagManagerContext'
import { GTMEvents } from './types/common/TagManager'

export const App = () => {
    const { dataLayer } = useGTM()
    let location = useLocation()
    const { currentUser } = useAuth()

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
            window.document.title =
                routesArr.find((el) => el.path === location.pathname)?.title || window.document.title

            dataLayer({
                dataLayer: {
                    event: GTMEvents.screen,
                    page: {
                        path: location.pathname,
                        title: window.document.title,
                    },
                    uuid: currentUser?.uid,
                },
            })
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [location]
    )
    return (
        <ThemeProvider theme={defaultTheme}>
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
        </ThemeProvider>
    )
}

export default App
