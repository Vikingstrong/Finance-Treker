import { NavLink } from "react-router";
import { Button } from "../../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { useTheme } from "@/store/themeStore";
import { useAuth } from "@/store/authStore";
import { useTranslation } from "react-i18next";


export default function DashboardHeader() {
  const userData = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout); 
  const { theme, switchTheme } = useTheme();
  const { i18n, t } = useTranslation();
  
  return (
    <header className="bg-header-bg w-full p-5">
      <div className="flex justify-between items-center max-w-300 m-auto">
        <div className="flex gap-10 items-center">
          <NavLink to="/dashboard">
            <h1 className="text-2xl font-bold font-heading">Finance Treker</h1>
          </NavLink>
          <nav className="hidden lg:flex gap-8 items-center text-base">
            <NavLink to="/dashboard" end className={({isActive}) => isActive ? "font-semibold" : "text-muted-foreground"}>Main</NavLink>
          </nav>
        </div>

        <div className="flex gap-4 items-center">
          <select
            value={i18n.language.startsWith("ru") ? "ru" : "en"}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="h-9 px-3 py-1 text-sm font-semibold bg-transparent border border-border rounded-lg text-foreground cursor-pointer outline-none"
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>

          <Select defaultValue={theme} onValueChange={switchTheme}>
            <SelectTrigger><SelectValue/></SelectTrigger>
            <SelectContent className="h-20">
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="light">Light</SelectItem>
            </SelectContent>
          </Select>

          <Avatar className="cursor-pointer">
            <AvatarFallback>{userData?.user_metadata?.name?.[0]?.toUpperCase()}</AvatarFallback>
          </Avatar>

          <Button variant="outline" onClick={logout}>{t("auth.logout")}</Button>
        </div>
      </div>
    </header>
  );
}