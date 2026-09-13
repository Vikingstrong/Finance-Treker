import { NavLink } from "react-router";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useTheme } from "@/store/themeStore";
import { useTranslation } from "react-i18next";



export default function Header() {

  const { theme, switchTheme } = useTheme();

  const { i18n, t } = useTranslation();

  return (
    <div className="bg-header-bg w-full p-5 fixed z-50">
      <header className="flex justify-between items-center max-w-300 m-auto">
        <div className="flex gap-15 items-center">
          <NavLink to="/">
            <h1 className="text-3xl font-bold font-heading">Finance Treker</h1>
          </NavLink>
          <nav className="hidden lg:flex gap-10 items-center lg:text-lg">
            <a href="#features" className="hover:opacity-80 transition-opacity">
              {t("header.features")}
            </a>
            <a href="#rates" className="hover:opacity-80 transition-opacity">
                {t("header.rates")}
            </a>
            <a href="#reviews" className="hover:opacity-80 transition-opacity">
                {t("header.reviews")}
            </a>
          </nav>
        </div>
        
        <div className="lg:hidden flex items-center gap-4">
          <Button variant='outline'><Menu/></Button>
        </div>

        <div className="hidden lg:flex gap-5 items-center">
          <select
            value={i18n.language.startsWith("ru") ? "ru" : "en"}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="h-9 px-3 py-1 text-sm font-semibold bg-transparent border border-border rounded-lg text-foreground cursor-pointer outline-none focus:ring-1 focus:ring-ring"
          >
            <option value="en" className="bg-card text-foreground">EN</option>
            <option value="ru" className="bg-card text-foreground">RU</option>
          </select>

          <Select defaultValue={theme} onValueChange={switchTheme}>
            <SelectTrigger><SelectValue/></SelectTrigger>
            <SelectContent className="h-20">
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="light">Light</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-5 items-center">
            <NavLink to="/login">
              <Button className="text-lg font-semibold">{t("header.myOffice")}</Button>
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}