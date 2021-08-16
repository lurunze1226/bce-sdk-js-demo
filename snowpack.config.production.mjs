import baseConfig from './snowpack.config.base.mjs';

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    ...baseConfig,
    mode: 'development',
}