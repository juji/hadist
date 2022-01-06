
const path = require('path')

module.exports = {
  trailingSlash: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  future: {
    webpack5: true,
  },
  publicRuntimeConfig: {
    GOOGLE_CSE: process.env.GOOGLE_CSE,
    DATA_REPO_URL: process.env.DATA_REPO_URL
  }
}
