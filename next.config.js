/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/auth/discord",
        destination: `https://discord.com/api/oauth2/authorize?client_id=1080473337018450012&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth&response_type=code&scope=identify%20email`,
      },
    ];
  },
};

module.exports = nextConfig;
