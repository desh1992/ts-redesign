/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config, { isServer }) => {
    // Add GLSL support
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });

    // Add Node.js polyfills for client-side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util'),
        crypto: require.resolve('crypto-browserify'),
        process: require.resolve('process/browser'),
      };
    }

    return config;
  },
}

module.exports = nextConfig
