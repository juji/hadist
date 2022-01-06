
const path = require('path')

console.log(process.env)

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
    GOOGLE_CSE: process.env.GOOGLE_CSE,
  }
}
