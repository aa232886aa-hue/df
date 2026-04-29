
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export', // מייצר תיקיית out עם קבצי HTML סטטיים
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // חובה לייצוא סטטי כדי שהתמונות יעבדו מקומית
  },
  trailingSlash: true, // מבטיח ניווט תקין בין דפי HTML מקומיים
  experimental: {
    allowedDevOrigins: [
      '6000-firebase-studio-1776997785130.cluster-l6vkdperq5ebaqo3qy4ksvoqom.cloudworkstations.dev',
      'localhost:9002'
    ],
  },
};

export default nextConfig;
