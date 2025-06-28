"use client";
import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="relative bg-primary pt-32 pb-20">
      <Container>
        {/* Header - Updated to match hero typography */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-primary-foreground rounded-full mx-auto my-8"></div>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl">
            Ready to join the <span className="font-semibold">RIKA</span>{" "}
            community? We'd love to hear from you. Get in touch and let's build
            a safer future together.
          </p>
        </div>

        {/* Grid Container - Updated spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Get In Touch
            </h2>

            <div className="space-y-8">
              {/* Contact info items */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-primary-foreground font-semibold text-lg md:text-xl mb-1">
                    Email
                  </h3>
                  <p className="text-primary-foreground/80">
                    support@rikainfo.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-primary-foreground font-semibold text-lg md:text-xl mb-1">
                    Phone
                  </h3>
                  <p className="text-primary-foreground/80">
                    (+91)123-456-7890
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-primary-foreground font-semibold text-lg md:text-xl mb-1">
                    Office
                  </h3>
                  <p className="text-primary-foreground/80">
                    RIKATEK Solutions Pvt Ltd.
                    <br />
                    Pune, Maharastra
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links - Updated spacing */}
            <div className="pt-8">
              <h3 className="text-xl md:text-2xl font-semibold text-primary-foreground mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center hover:bg-primary-foreground/80 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/rika4_u?igsh=NzVubGd4bzV6OW1j&utm_source=qr"
                  className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center hover:bg-primary-foreground/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <circle cx="17.5" cy="6.5" r="1" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/rika4_u?igsh=NzVubGd4bzV6OW1j&utm_source=qr"
                  className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center hover:bg-primary-foreground/80 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form - Updated styling */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-primary-foreground/20 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
              Send us a Message
            </h2>

            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg text-primary-foreground font-medium mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 text-lg bg-primary-foreground/20 border border-primary-foreground/30 rounded-xl text-primary-foreground placeholder-primary-foreground/70 focus:outline-none focus:border-primary-foreground focus:ring-2 focus:ring-primary-foreground/50 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg text-primary-foreground font-medium mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 text-lg bg-primary-foreground/20 border border-primary-foreground/30 rounded-xl text-primary-foreground placeholder-primary-foreground/70 focus:outline-none focus:border-primary-foreground focus:ring-2 focus:ring-primary-foreground/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-lg text-primary-foreground font-medium mb-3"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 text-lg bg-primary-foreground/20 border border-primary-foreground/30 rounded-xl text-primary-foreground placeholder-primary-foreground/70 focus:outline-none focus:border-primary-foreground focus:ring-2 focus:ring-primary-foreground/50 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg text-primary-foreground font-medium mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-6 py-4 text-lg bg-primary-foreground/20 border border-primary-foreground/30 rounded-xl text-primary-foreground placeholder-primary-foreground/70 focus:outline-none focus:border-primary-foreground focus:ring-2 focus:ring-primary-foreground/50 transition-all resize-vertical"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold py-5 px-8 rounded-xl text-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
