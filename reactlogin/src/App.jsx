import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Root from './routes/Root'
import Home from './routes/Home'
import ErrorPage from './routes/ErrorPage'
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
        { path: 'auth'},
        { path: 'logout'},
        { path: 'inventario'},
        { path: 'panel'}
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
