import { lazy, useEffect } from "react"
import { createBrowserRouter, Navigate, Outlet } from "react-router";
import { RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import { useAuth } from "./store/authStore";
import { Spinner } from "./components/ui/spinner";
import DashboardLayout from "./Layout/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useTheme } from "./store/themeStore";

const HomePg = lazy(() => import('./pages/Home/Home'))

const RegPg = lazy(() => import("./pages/Auth/Register"))
const LoginPg = lazy(() => import("./pages/Auth/Login"))

const root = document.documentElement

function RequireAuth(){
  const user = useAuth((s) => s.user)
  const isLoading = useAuth((s) => s.isLoading)
    
  if(isLoading) return(
    <div className="flex items-center justify-center h-dvh">
      <Spinner/>
    </div>
  )
  return user ? <Outlet/> : <Navigate to="/login" replace/>
}
function RequireGuest(){
  const user = useAuth((s) => s.user);
  const isLoading = useAuth((s) => s.isLoading)
  if(isLoading) return(
    <div className="flex items-center justify-center h-dvh">
      <Spinner/>
    </div>
  )
  return !user ? <Outlet/> : <Navigate to="/dashboard" replace/>
}

const router = createBrowserRouter([
  {
    element: <RequireGuest />,
    children: [
      { path: "/", element: <Layout />, children: [{ index: true, element: <HomePg /> }] },
      { path: "register", element: <RegPg /> },
      { path: "login", element: <LoginPg /> },
    ],
  },
  {
    element: <RequireAuth />,
    children: [
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Dashboard/> },
        ],
      },
    ],
  },
]);

export default function App() {

  const {theme} = useTheme()
  useEffect(() => {
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);  

  const init = useAuth((store) => store.init)
  useEffect(() => {
    init()
  },[])
  
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}
