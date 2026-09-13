"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, Wallet, Target, PieChart, TrendingUp } from "lucide-react";

export default function Features() {
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

  const chartData = [
    { month: t("features.cards.months.jan"), height: "40%", amount: "$1.2k" },
    { month: t("features.cards.months.feb"), height: "55%", amount: "$1.8k" },
    { month: t("features.cards.months.mar"), height: "45%", amount: "$1.4k" },
    { month: t("features.cards.months.apr"), height: "70%", amount: "$2.3k" },
    { month: t("features.cards.months.may"), height: "85%", amount: "$2.9k" },
    { month: t("features.cards.months.jun"), height: "100%", amount: "$3.7k" },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground tracking-tight leading-tight">
            {t("features.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            {t("features.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="md:col-span-7 rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-primary/40 transition-colors shadow-xs"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                {t("features.cards.monthlyBudget")}
              </span>
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Wallet className="w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl sm:text-5xl font-extrabold font-heading text-foreground tracking-tight">
                  $4,250.00
                </span>
                <span className="text-xs sm:text-sm font-medium text-emerald-500 flex items-center gap-0.5">
                  <ArrowUpRight className="w-4 h-4" /> +12%
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-muted-foreground block mb-1">
                  {t("features.cards.totalIncome")}
                </span>
                <span className="text-lg font-bold text-foreground">$6,500.00</span>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block mb-1">
                  {t("features.cards.totalSpent")}
                </span>
                <span className="text-lg font-bold text-foreground">$2,250.00</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-5 rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-primary/40 transition-colors shadow-xs"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                {t("features.cards.savingsGoal")}
              </span>
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Target className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold font-heading text-foreground">
                    $3,750
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">
                    {t("features.cards.target")} $5,000
                  </span>
                </div>
                <span className="text-sm font-bold text-primary">75%</span>
              </div>

              <div className="w-full bg-secondary rounded-full h-3 overflow-hidden p-0.5 border border-border/40">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  className="bg-primary h-full rounded-full"
                />
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                {t("features.cards.goalForecast")}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-5 rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-primary/40 transition-colors shadow-xs"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                {t("features.cards.mainExpenses")}
              </span>
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <PieChart className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-foreground">{t("features.cards.groceries")}</span>
                  <span className="text-muted-foreground">$820.00 (36%)</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "36%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-foreground">{t("features.cards.housing")}</span>
                  <span className="text-muted-foreground">$950.00 (42%)</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div className="bg-primary/70 h-full rounded-full" style={{ width: "42%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-foreground">{t("features.cards.entertainment")}</span>
                  <span className="text-muted-foreground">$480.00 (22%)</span>
                </div>
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                  <div className="bg-primary/40 h-full rounded-full" style={{ width: "22%" }} />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-7 rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-primary/40 transition-colors shadow-xs"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                {t("features.cards.savingsTrends")}
              </span>
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>

            <div className="flex items-end justify-between gap-2 h-36 pt-4">
              {chartData.map((bar, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group/bar">
                  <span className="text-[10px] text-muted-foreground opacity-0 group-hover/bar:opacity-100 transition-opacity">
                    {bar.amount}
                  </span>
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: bar.height }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 * index, ease: "easeOut" }}
                    className="w-full max-w-[36px] bg-primary/20 group-hover/bar:bg-primary rounded-t-lg transition-colors"
                  />
                  <span className="text-xs text-muted-foreground font-medium">{bar.month}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}