/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    nextScriptWorkers: true,
    output: 'export'
}

module.exports = nextConfig
