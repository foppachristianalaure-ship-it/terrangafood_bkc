/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permettre les images depuis n'importe quel domaine (pour les URLs d'images)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
