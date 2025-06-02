"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Partner in Business Growth and Innovation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Entrepreneurial Outlook was founded with a mission to help visionary entrepreneurs 
                transform their ideas into thriving businesses. With decades of combined experience, 
                our team brings expertise across multiple industries and business disciplines.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">Industry-leading consultants with proven track records</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">Customized strategies based on your unique business needs</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">Data-driven approach to maximize ROI and growth potential</p>
                </div>
              </div>
              
              <Button>Learn More About Us</Button>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Business team discussing strategy"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Partner in Business Growth and Innovation
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Entrepreneurial Outlook was founded with a mission to help visionary entrepreneurs 
              transform their ideas into thriving businesses. With decades of combined experience, 
              our team brings expertise across multiple industries and business disciplines.
            </p>
            
            <div className="space-y-4 mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-foreground">Industry-leading consultants with proven track records</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-foreground">Customized strategies based on your unique business needs</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-foreground">Data-driven approach to maximize ROI and growth potential</p>
              </motion.div>
            </div>
            
            <Button>Learn More About Us</Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden"
          >
            <Image
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Business team discussing strategy"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}