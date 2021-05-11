module.exports = {
  env: {
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/prachicloud/image/upload"
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
};
