const path = require('path');
// const redirects = require('./redirects'); // Commented out for static export

const root = path.join(__dirname, '../');
module.exports = {
  images: {
    unoptimized: true, // Required for static export
    domains: [
      'paper-attachments.dropbox.com',
      'ibb.co',
      'codahosted.io',
      'i.pinimg.com',
      'github.com',
      'pinterest-assets.com',
      'www.pinterest-assets.com',
    ],
  },
  reactStrictMode: true,
  // Redirects moved to hosting provider (Vercel _redirects, Netlify _redirects, etc.)
  // redirects: async () => redirects,

  // Server runtime config not available in static export
  // Use environment variables instead if needed
  env: {
    DOCS_ROOT: __dirname,
    GESTALT_ROOT: root,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack: (config, { dev }) => ({
    ...config,
    resolve: {
      ...config.resolve,
      /**
       * Explicitly tell webpack to ignore resolving "fs" for the client bundle
       * To get the markdown files from disk, we use the fs module. Since we're allowed to use it in the getStaticProps method of next js, we should be okay to resolve it
       * However, webpack also tries to add it to the client and causes an error. This line should prevent that.
       */
      fallback: { fs: false, path: false },
    },
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /examples\/.*\.tsx$/,
          use: path.resolve('./exampleCleanupLoader.js'),
        },
      ],
    },
    watchOptions: {
      ...config.watchOptions,
      poll: dev ? 500 : false,
    },
  }),
  // Note: For Next.js 12, we use 'next export' command instead of output: 'export'
  // output: 'export', // This option is only available in Next.js 13+
  trailingSlash: true, // Required for static export to work properly
};
