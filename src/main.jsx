import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './Pages/Home/Home.jsx'
import Login from './components/Login.jsx'
import Registration from './components/Registration.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import ViewDetails from './Pages/ViewDetails.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Questions from './Pages/Questions.jsx'
import AddToys from './Pages/AddToys.jsx'
import AllToys from './Pages/AllToys.jsx'
import MyToys from './Pages/MyToys.jsx'
import UpdateToys from './components/UpdateToys.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'registration',
        element: <Registration />
      },
      {
        path: 'details/:id',
        element: <PrivateRoute><ViewDetails /></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/teddys/${params.id}`)
      },
      {
        path: 'blog',
        element: <Questions />
      },
      {
        path: 'addToys',
        element: <PrivateRoute><AddToys /></PrivateRoute>
      },
      {
        path: 'allToys',
        element: <AllToys />
      },
      {
        path: 'myToys',
        element: <PrivateRoute><MyToys /></PrivateRoute>
      },
      {
        path: 'updateToys/:id',
        element: <PrivateRoute><UpdateToys /></PrivateRoute>,
        loader: ({params}) =>fetch(`http://localhost:5000/teddys/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
