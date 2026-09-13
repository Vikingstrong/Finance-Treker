"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "../../../components/ui/avatar";

interface ReviewItem {
  name: string;
  role: string;
  avatar: string;
  text: string;
}

export default function Reviews() {
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

  const reviewsList = t("reviews.items", { returnObjects: true }) as ReviewItem[];

  return (
    <section id="reviews" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight leading-tight">
            {t("reviews.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            {t("reviews.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {Array.isArray(reviewsList) &&
            reviewsList.map((review, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between relative hover:border-primary/40 transition-colors shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-border/60">
                  <Avatar className="h-10 w-10 border border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-sm font-bold font-heading text-foreground">
                      {review.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}