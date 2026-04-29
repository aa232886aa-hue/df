/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // השורה הקריטית לתיקיית out
  images: {
    unoptimized: true, // חובה בשביל אפליקציה עצמאית
  },
};

module.exports = nextConfig;
