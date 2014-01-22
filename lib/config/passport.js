'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy;

/**
 * Passport configuration
 */
module.exports = function() {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findOne({
      _id: id
    }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
      done(err, user);
    });
  });

  // add other strategies for more authentication flexibility
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(email, password, done) {
      User.findOne({
        email: email
      }, function(err, user) {
        if (err) return done(err);
        
        if (!user) {
          return done(null, false, {
            message: 'This email is not registered.'
          });
        }
        if (!user.authenticate(password)) {
          return done(null, false, {
            message: 'This password is not correct.'
          });
        }
        return done(null, user);
      });
    }
  ));

  passport.use(new FacebookStrategy({
      clientID: "615086855207027",
      clientSecret: "c082cdee43dd467ce55c34e047dfb0a4",
      callbackURL: "http://localhost:9000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      
      var user_data = {
        provider: "facebook",
        id: profile.id,
        name: profile.givenName+" "+profile.familyName,
        role: {
          type: 'user'
        },
        facebook: profile,
        beers: [  ]
      };

      User.findOrCreate(user_data, function(err, user) {
        if (err) { return done(err); }
        done(null, user);
      });
      
    }
  ));


};
