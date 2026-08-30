/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permet de lancer un build sans écraser le .next du serveur de dev.
  ...(process.env.BUILD_DIST_DIR ? { distDir: process.env.BUILD_DIST_DIR } : {}),

  async redirects() {
    return [
      // La réservation en ligne a été retirée : on renvoie vers la page contact,
      // où figurent le téléphone, les horaires et le plan d'accès.
      { source: "/reservation", destination: "/contact", permanent: true },
      { source: "/reservation/:path*", destination: "/contact", permanent: true },
    ]
  },
};

export default nextConfig;
