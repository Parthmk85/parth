/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // If you are deploying to a subdirectory (e.g. https://username.github.io/repo-name/),
  // you must uncomment the line below and replace '/repo-name' with your repository name.
  // basePath: '/repo-name',
};

export default nextConfig;
