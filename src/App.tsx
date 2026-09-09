import { lazy } from "react"
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Layout from "./Layout/Layout";

const HomePg = lazy(() => import('./pages/Home/Home'))

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <HomePg/>
      }
    ]
  }
])

export default function App() {

  return(
    <RouterProvider router={router}></RouterProvider>
  )
}
