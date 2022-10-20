/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  reactStrictMode: true,
  compress: true,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
 
   images: {
    loader: 'akamai',
    path: 'https://www.datocms-assets.com/',
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
 
  
}
module.exports = {
  'fontawesome-svg-core': {
    'license': 'free'
  }
}

module.exports = nextConfig
