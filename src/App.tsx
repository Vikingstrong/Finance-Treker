import { lazy, useEffect } from "react"
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import { useAuth } from "./store/authStore";

const HomePg = lazy(() => import('./pages/Home/Home'))

const RegPg = lazy(() => import("./pages/Auth/Register"))
const LoginPg = lazy(() => import("./pages/Auth/Login"))

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <HomePg/>
      },
      {
        path:"register",
        element: <RegPg/>
      },
      {
        path:"login",
        element: <LoginPg/>
      }
    ]
  }
])

export default function App() {

  const init = useAuth((store) => store.init)
  useEffect(() => {
    init()
  },[])

  return(
    <RouterProvider router={router}></RouterProvider>
  )
}
