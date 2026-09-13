import { BatteryCharging, Wifi, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import safeMoneyImg from "../../../assets/safeMoneyImg.jpg";
import imgWork from "../../../assets/imgIphone2.avif";
import { useTranslation } from "react-i18next";

export default function IphoneHome() {
  const { t } = useTranslation();

  return (
    <div className="relative mx-auto my-6 flex flex-col gap-3 py-2 px-3 w-72 h-140 border-4 rounded-[42px] border-zinc-800 bg-zinc-950 p-3 shadow-2xl ring-1 ring-white/10 select-none">
      
      <div className="flex text-xs font-semibold justify-between w-full text-zinc-400 px-2 pt-1 z-10">
        <span>18:34</span>
        <div className="flex items-center gap-1.5">
          <Wifi className="w-3.5 h-3.5" />
          <span className="text-[10px]">5G</span>
          <BatteryCharging className="w-4 h-4 text-emerald-400" />
        </div>
      </div>
      
      <div className="absolute bg-black top-3 w-20 h-5 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300 hover:w-28 border border-zinc-800/80 z-20 flex items-center justify-between px-2">
        <div className="w-2 h-2 rounded-full bg-blue-900/60 ring-1 ring-blue-500/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 ring-1 ring-zinc-700" />
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 pt-3 pb-2 pr-1 text-zinc-100 rounded-[30px]
        [::-webkit-scrollbar]:w-0.5
        [::-webkit-scrollbar-track]:bg-transparent 
        [::-webkit-scrollbar-thumb]:bg-zinc-700/50 
        [::-webkit-scrollbar-thumb]:rounded-full 
        hover:[::-webkit-scrollbar-thumb]:bg-zinc-500">
        
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-900/80 border border-zinc-800 p-3.5">
          <div className="flex items-center gap-1.5 text-primary text-[11px] font-bold uppercase tracking-wider mb-1">
            Finance Tracker
          </div>
          <h2 className="text-base font-bold text-white leading-tight">
            {t("iphone.title")}
          </h2>
          <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
            {t("iphone.description")}
          </p>
        </div>

        <div className="group rounded-2xl bg-zinc-900/90 border border-zinc-800/80 p-3 transition hover:border-zinc-700">
          <div className="relative h-24 w-full overflow-hidden rounded-xl bg-zinc-800 mb-2.5">
            <img 
              src={imgWork} 
              alt="Analytics" 
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold text-zinc-100">{t("iphone.analyticsTitle")}</h3>
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
          </div>
          <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">
            {t("iphone.analyticsDesc")}
          </p>
        </div>

        <div className="group rounded-2xl bg-zinc-900/90 border border-zinc-800/80 p-3 transition hover:border-zinc-700">
          <div className="relative h-24 w-full overflow-hidden rounded-xl bg-zinc-800 mb-2.5">
            <img 
              src={safeMoneyImg} 
              alt="Security" 
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold text-zinc-100">{t("iphone.securityTitle")}</h3>
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
          </div>
          <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">
            {t("iphone.securityDesc")}
          </p>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-primary/10 border border-primary/20 p-2.5 text-xs text-primary font-medium cursor-pointer hover:bg-primary/20 transition">
          <span>{t("iphone.learnMore")}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>

      </div>

      <div className="flex justify-center pb-0.5 pt-1">
        <div className="h-1 w-28 rounded-full bg-zinc-600/60" />
      </div>

    </div>
  );
}