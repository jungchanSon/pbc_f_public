/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MEASUREMENT_ID: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
        ADSENSE_ACCOUNT: process.env.NEXT_PUBLIC_ADSENSE_ACCOUNT,
        POBCODE_REQ_URL: process.env.NEXT_PUBLIC_POBCODE_REQ_URL,
        TRADESEARCH: process.env.NEXT_PUBLIC_TRADESEARCH,
        DESTINATION: process.env.NEXT_PUBLIC_DESTINATION,
        SOURCE: process.env.NEXT_PUBLIC_SOURCE
    }
};
export default nextConfig;
