/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "munchiesprod.s3.ap-southeast-1.amazonaws.com",
            "munchiesprod.s3.amazonaws.com",
            "api.lorem.space",
        ],
    },
};

module.exports = nextConfig;
