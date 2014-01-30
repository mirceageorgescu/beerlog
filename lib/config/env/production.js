'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://localhost/fullstack'
  },
  fb_app: {
  	clientID: process.env.FB_APP_ID,
  	clientSecret: process.env.FB_APP_SECRET,
  	callbackURL: process.env.FB_APP_CALLBACKURL
  }
};