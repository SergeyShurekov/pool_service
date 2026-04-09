import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/remont-oborudovaniya-basseynov",
        destination: "/remont-basseynov",
        permanent: true,
      },
      {
        source: "/obsluzhivanie-basseynov-dlya-chastnyh-domov",
        destination: "/obsluzhivanie-basseynov",
        permanent: true,
      },
      {
        source: "/himicheskaya-obrabotka-vody",
        destination: "/chistka-basseyna",
        permanent: true,
      },
      {
        source: "/basseyn-bez-hlora",
        destination: "/obsluzhivanie-basseynov",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
