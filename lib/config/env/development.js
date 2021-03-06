'use strict';

module.exports = {
  env: 'development',
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost/fullstack-dev'
  },
  fb_app: {
  	clientID: process.env.FB_APP_ID || "your-client-id",
  	clientSecret: process.env.FB_APP_SECRET || "your-client-secret",
  	callbackURL: process.env.FB_APP_CALLBACKURL || "http://localhost:9000/auth/facebook/callback"
  }
};