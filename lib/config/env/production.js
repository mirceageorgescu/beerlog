'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://localhost/fullstack'
  },
  fb_app: {
  	clientID: process.env.FB_APP_CLIENTID,
  	clientSecret: provess.env.FB_APP_CLIENTSECRET,
  	callbackURL: process.env.FB_APP_CALLBACKURL
  }
};