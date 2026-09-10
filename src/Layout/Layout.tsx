import { Spinner } from "@/components/ui/spinner";
import Header from "@/components/widget/Header";
import { Suspense } from "react";
import { Outlet } from "react-router";


export default function Layout() {

  
  return(
    <>
      <Header/>
      <Suspense fallback={
        <div className="flex items-center justify-center w-full h-dvh">
          <Spinner className="size-16"/>
        </div>}
        >
          <Outlet></Outlet>
      </Suspense>
    </>
  )
}
