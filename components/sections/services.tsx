"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, PieChart, TrendingUp, Target, Users, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Business Strategy",
    description: "Develop comprehensive strategies aligned with your business goals to drive sustainable growth and competitive advantage."
  },
  {
    icon: <PieChart className="h-10 w-10 text-primary" />,
    title: "Financial Planning",
    description: "Optimize financial performance with expert analysis, forecasting, and planning tailored to entrepreneurial ventures."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Market Expansion",
    description: "Identify new opportunities and markets to scale your business with data-driven strategies and execution plans."
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Operational Excellence",
    description: "Streamline operations, increase efficiency, and enhance productivity through proven methodologies and frameworks."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Leadership Development",
    description: "Build high-performing teams and develop leadership capabilities to drive organizational success."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Innovation Strategy",
    description: "Foster innovation culture and develop systems to consistently generate and implement breakthrough ideas."
  }
];

export default function Services() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="services\" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive consulting solutions designed to address the unique challenges faced by entrepreneurs and growing businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-border bg-card hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive consulting solutions designed to address the unique challenges faced by entrepreneurs and growing businesses.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border border-border bg-card hover:shadow-md transition-shadow duration-300 h-full">
                <CardHeader className="pb-2">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}