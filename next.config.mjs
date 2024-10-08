/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static.wearpact.com',
            port: '',
          },
        ],
    },
    output: "export",
};

export default nextConfig;
