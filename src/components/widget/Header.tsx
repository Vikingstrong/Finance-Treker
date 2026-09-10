import { NavLink } from "react-router";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useTheme } from "@/store/themeStore";
import { useEffect } from "react";
import { useAuth } from "@/store/authStore";
import { Avatar, AvatarFallback } from "../ui/avatar";


const root = document.documentElement


export default function Header() {
    
  const userData = useAuth((state) => state.user)
  console.log(userData)

  const {theme, switchTheme} = useTheme()
  useEffect(() => {
    if(theme == 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  },[theme])

  return(
    <>
      <header className="flex justify-between items-center p-5 lg:px-0 max-w-300 m-auto">
            <div className="flex gap-25 items-center">
                <NavLink to="/"><h1 className="text-3xl font-bold font-heading">Finance Treker</h1></NavLink>
                <nav className="hidden lg:flex gap-10 items-center font-semibold lg:text-xl">
                    <NavLink to="/">Link-1</NavLink>
                    <NavLink to="/">Link-2</NavLink>
                    <NavLink to="/">Link-3</NavLink>
                </nav>
            </div>
            <div className="lg:hidden flex items-center gap-4">
                {
                    userData ? (
                        <Avatar 
                          className="cursor-pointer font-semibold select-none transition-all duration-300
                          hover:scale-110 hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:ring-offset-background
                          "
                        ><AvatarFallback className="text-xl">{userData.user_metadata.name[0].toUpperCase()}</AvatarFallback> 
                        </Avatar>)
                    : ""
                }
                <Button variant='outline'><Menu/></Button>
            </div>
            <div className="hidden lg:flex gap-5 items-center">
                {
                    userData ? (
                        <Avatar 
                          className="cursor-pointer font-semibold select-none transition-all duration-300
                          hover:scale-110 hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:ring-offset-background
                          "
                        ><AvatarFallback className="text-lg">{userData.user_metadata.name[0].toUpperCase()}</AvatarFallback> 
                        </Avatar>
                    ) 
                    : (
                        <div className="flex gap-5 items-center">
                            <NavLink to="register">
                                <Button className="bg-green-700 hover:bg-green-800 text-lg font-semibold">Sign Up</Button>
                            </NavLink>
                            <NavLink to="login">
                                <Button className="bg-green-700 hover:bg-green-800 text-lg font-semibold">Login</Button>
                            </NavLink>
                        </div>
                    )
                }

                <Select defaultValue={theme} onValueChange={(value) => switchTheme(value)}>
                    <SelectTrigger>
                        <SelectValue/>
                    </SelectTrigger>
                    <SelectContent className="h-20">
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="light">Light</SelectItem>
                    </SelectContent>
                </Select>
            </div>
      </header>
    </>
  )
}
