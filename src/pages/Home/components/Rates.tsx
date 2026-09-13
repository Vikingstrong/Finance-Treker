"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Check, Zap, Sparkles } from "lucide-react";
import { Button } from "../../../components/ui/button"
import { NavLink } from "react-router";

export default function Rates() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const basicFeatures = t("rates.basic.features", { returnObjects: true }) as string[];
  const proFeatures = t("rates.pro.features", { returnObjects: true }) as string[];

  return (
    <section id="rates" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight">
            {t("rates.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            {t("rates.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          {/* Basic Plan */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between hover:border-border/80 transition-colors shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-heading text-foreground">
                  {t("rates.basic.title")}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground min-h-[40px] mb-6">
                {t("rates.basic.desc")}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl sm:text-5xl font-extrabold font-heading text-foreground tracking-tight">
                  $0
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {t("rates.period")}
                </span>
              </div>

              <div className="space-y-3 mb-8">
                {Array.isArray(basicFeatures) &&
                  basicFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="p-1 rounded-full bg-secondary text-muted-foreground shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
              </div>
            </div>

            <NavLink to="/register" className="w-full">
              <Button variant="outline" className="w-full text-base font-semibold py-6 rounded-2xl">
                {t("rates.basic.cta")}
              </Button>
            </NavLink>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-3xl border-2 border-primary bg-card p-6 sm:p-8 flex flex-col justify-between relative shadow-lg shadow-primary/5"
          >
            <div className="absolute -top-3.5 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
              <Zap className="w-3 h-3 fill-current" />
              <span>{t("rates.pro.popularTag")}</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-heading text-foreground">
                  {t("rates.pro.title")}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground min-h-[40px] mb-6">
                {t("rates.pro.desc")}
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-2xl font-bold text-muted-foreground line-through decoration-destructive/60">
                  $19
                </span>
                <span className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                  $9
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {t("rates.period")}
                </span>
              </div>

              <div className="space-y-3 mb-8">
                {Array.isArray(proFeatures) &&
                  proFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="p-1 rounded-full bg-primary/10 text-primary shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
              </div>
            </div>

            <NavLink to="/register" className="w-full">
              <Button className="w-full text-base font-semibold py-6 rounded-2xl">
                {t("rates.pro.cta")}
              </Button>
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}