import { useEffect } from 'react'
import { ThemeProvider } from 'theme-ui'
import { defaultTheme } from './ui/theme'
import { useAuth } from './context/AuthContext'
import { Route, Routes, useLocation } from 'react-router-dom'
import { DashboardNew } from './pages/Dashboard/DashboardNew'
import { LoginNew } from './pages/Login/LoginNew'
import { ProtectedRoute } from './utils/ProtectedRoute'
import { useGTM } from './context/TagManagerContext'
import { GTMEvents } from './types/common/TagManager'
import { SingupNew } from './pages/Singup/SingupNew'
import { Download } from './pages/Download/Download'
import { EditUser } from './pages/EditUser/EditUser'

export const App = () => {
  const { dataLayer } = useGTM()
  let location = useLocation()
  const { currentUser } = useAuth()

  const routesArr = [
    {
      path: '/',
      title: 'Dashboard',
      component: <DashboardNew />,
      private: true,
    },
    {
      path: '/signup',
      title: 'SignUp',
      component: <SingupNew />,
      private: false,
    },
    {
      path: '/login',
      title: 'Login',
      component: <LoginNew />,
      private: false,
    },
    {
      path: '/download',
      title: 'Download',
      component: <Download />,
      private: true,
    },
    {
      path: '/test',
      title: 'Test',
      component: <EditUser />,
      private: true,
    },
  ]

  useEffect(
    () => {
      window.document.title = routesArr.find((el) => el.path === location.pathname)?.title || window.document.title

      dataLayer({
        dataLayer: {
          event: GTMEvents.screen,
          screen_title: window.document.title,
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
