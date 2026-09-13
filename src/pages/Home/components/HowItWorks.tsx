"use client";

import { motion } from "framer-motion";
import { CreditCard, PieChart, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.description"),
      icon: CreditCard,
    },
    {
      number: "02",
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.description"),
      icon: Target,
    },
    {
      number: "03",
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.description"),
      icon: PieChart,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-foreground text-xs font-semibold">
            {t("howItWorks.badge")}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
            {t("howItWorks.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            {t("howItWorks.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ y: -10}}
                className="relative rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between shadow-xs hover:border-primary/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-heading text-primary/40">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}