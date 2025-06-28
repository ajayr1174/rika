"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative bg-gradient-to-br from-background to-background/50 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-12 w-12 text-primary" />
              <span className="text-2xl font-bold text-primary">
                RIKATEK Innovations
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ">
              Empowering Safety. Advocating Rights. Building a Safer Tomorrow.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
              RIKA is a burgeoning startup dedicated to prioritizing human
              safety and advocating for individual rights. In response to the
              alarming surge in violence and sexual assault across the nation,
              RIKA takes a stand—committed to creating a world where safety and
              dignity are non-negotiable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/20">
                View Products
              </Button>
              <Button size="lg" variant="outline">
                Safety Standards
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span>Global Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-background to-background/50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 mb-6"
          >
            <Shield className="h-12 w-12 text-primary" />
            <span className="text-2xl font-bold text-primary">
              RIKATEK Innovations
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl lg:px-20 font-bold mb-6 "
          >
            Empowering Safety. Advocating Rights. Building a Safer Tomorrow.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8"
          >
            RIKA is a burgeoning startup dedicated to prioritizing human safety
            and advocating for individual rights. In response to the alarming
            surge in violence and sexual assault across the nation, RIKA takes a
            stand—committed to creating a world where safety and dignity are
            non-negotiable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Products
            </Button>
            <Button size="lg" variant="outline">
              Safety Standards
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span>Global Standards</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
