import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Root from './routes/Root'
import Home from './routes/Home'
import ErrorPage from './routes/ErrorPage'
import Auth from './routes/AuthPage'
import PanelPage from './routes/PanelPage'
import Inventario from './routes/Inventario'
import Logout from './routes/Logout'

import {action as authAction} from './routes/AuthPage'

function App() {
const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <Root/>,
      errorElement: <ErrorPage/>,
      id: 'root',
      children:[
        { index: true, element: <Home/>  },
        { path: 'login', element: <Auth/>},
        { path: 'logout', element: <Logout/>},
        { path: 'inventario', element: <Inventario/>},
        { path: 'panel', element: <PanelPage/>}
      ]
    }
  ]
)
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
