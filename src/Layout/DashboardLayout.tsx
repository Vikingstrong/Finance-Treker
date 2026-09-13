import DashboardHeader from "@/components/widget/DashboardHeader";
import { Outlet } from "react-router";



export default function DashboardLayout() {
  

  return(
    <>
      <DashboardHeader/>
      <Outlet/>
    </>
  )
}
