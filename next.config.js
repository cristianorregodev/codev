const withMDX = require('@next/mdx')()
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cristiandeveloper.com',
                port: '',
                pathname: '/storage/projects/**',
            },
            {
                protocol: 'http',
                hostname: 'api.cristiandeveloper.test',
                port: '',
                pathname: '/storage/projects/**',
            },
            {
                protocol: 'https',
                hostname: 'api.cristiandeveloper.com',
                port: '',
                pathname: '/storage/projects/**',
            },
            {
                protocol: 'https',
                hostname: 'api.cristiandeveloper.com',
                port: '',
                pathname: '/storage/posts/**',
            },
        ],
    },
}

module.exports = withMDX(nextConfig)
