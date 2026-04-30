/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // זה ימנע קריסה בזמן יצירת הדפים הסטטיים
  staticPageGenerationTimeout: 1000,
};

module.exports = nextConfig;
