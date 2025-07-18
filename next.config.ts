import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: ["44.201.132.40", "nft-project-l45u.vercel.app", "44.201.132.40/file"]
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
