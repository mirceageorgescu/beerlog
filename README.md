#beerlog

##What is this thing?
It's a simple web app that helps users keep a beer log

##How do you keep track of stuff?
We use a [trello board](https://trello.com/b/dJorGPsW/beerlog-app). Go have a look, it's public.

## Deploy to Heroku
Signup to [Heroku](http://heroku.com) and then ask to be added as a collaborator and then download and install [Heroku Toolbelt](https://toolbelt.herokuapp.com). 

Login to heroku:

    heroku login
    
Add your key to heroku:

    heroku keys:add

Make the heroku build:

    yo angular-fullstack:deploy heroku

Setup environment vars (**replace mongouser and mongopass**):
  
    heroku config:set MONGOLAB_URI=mongodb://mongouser:mongopass@ds027419.mongolab.com:27419/beerlog-prod

Deploy the app:

    cd dist && git push heroku master

The next time you deploy you only need to do 

    grunt build
    cd dist && git push heroku master