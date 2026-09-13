import { ArrowRight, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import IphoneHome from "./components/IphoneHome";
import { NavLink } from "react-router";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import { useTranslation } from "react-i18next";
import Rates from "./components/Rates";
import Reviews from "./components/Reviews";

export default function Home() {
  const { t } = useTranslation();

  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background pt-24 pb-16">
      <div className="absolute top-1/4 left-1/2 -z-10 h-88 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <section className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 text-center space-y-8 lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-md shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-foreground/80">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-foreground leading-[1.1]">
              {t("hero.titleLine1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-emerald-400">
                {t("hero.titleLine2")}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <NavLink className="w-full lg:w-auto" to="/register">
                <Button size="lg" className="h-12 px-7 text-base w-full font-semibold lg:w-auto shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all cursor-pointer">
                  {t("hero.getStarted")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </NavLink>

              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToHowItWorks}
                className="h-12 w-full lg:w-auto px-7 text-base font-medium cursor-pointer"
              >
                {t("hero.howItWorks")}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/60">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>{t("hero.ssl")}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Zap className="w-4 h-4 text-primary shrink-0" />
                <span>{t("hero.quickInput")}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-primary shrink-0" />
                <span>{t("hero.analytics")}</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative z-10 transition-transform duration-500 hover:scale-[1.02]">
              <IphoneHome />
            </div>
          </div>

        </div>
      </section>

      <HowItWorks />
      <Features />
      <Rates/>
      <Reviews/>
    </main>
  );
}