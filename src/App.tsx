import GlobalStyle, { theme } from './globalStyles'
import { ThemeProvider } from 'styled-components'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProjectRoutes } from './routes'

export const otherRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <div>
      <p>DASHBOARD</p>
    </div>
  }
])

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <RouterProvider router={otherRoutes} /> */}
      <ProjectRoutes />
    </ThemeProvider>
  )
}

export default App
