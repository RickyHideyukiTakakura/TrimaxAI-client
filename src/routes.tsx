import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { NotFound } from './pages/404'
import { Home } from './pages/app/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // {
      //   path: '/orders',
      //   element: <Orders />,
      // },
    ],
  },
  // {
  //   path: '/',
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       path: 'sign-in',
  //       element: <SignIn />,
  //     },
  //     {
  //       path: 'sign-up',
  //       element: <SignUp />,
  //     },
  //   ],
  // },
])
