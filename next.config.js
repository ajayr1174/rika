/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    EMAILJS_SERVICE_ID: "service_dayw434",
    EMAILJS_TEMPLATE_ID: "template_hpe3lll",
    EMAILJS_PUBLIC_KEY: "NR0q7-W-q5wnD8Q8a",
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
