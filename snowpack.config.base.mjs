// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
      public: { url: '/', static: true },
      'src/client': { url: '/dist' },
    },
    plugins: [
      '@snowpack/plugin-react-refresh',
      '@snowpack/plugin-dotenv',
      [
        '@snowpack/plugin-sass',
        {
          native: true,
        }
      ],
      [
        '@snowpack/plugin-typescript',
        {
          /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
          ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
        },
      ],
    ],
    routes: [
      /* Enable an SPA Fallback in development: */
      // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
      /* Example: Bundle your final build: */
      // "bundle": true,
    },
    packageOptions: {
      /* ... */
    },
    devOptions: {
      /* ... */
    },
    buildOptions: {
      /* ... */
    },
};
