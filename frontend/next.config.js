
const path = require('path')

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  future: {
    webpack5: true,
  },
  publicRuntimeConfig: {
    GOOLE_CSE: process.env.GOOLE_CSE,
  }
}
