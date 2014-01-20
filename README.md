# beerlog

## What is this thing?
It's a simple web app that helps users keep a beer log

## Project setup

First of all you will need to install [node.js](http://nodejs.org), [Compass](http://compass-style.org/install/) and [mongodb](http://www.mongodb.org/downloads) globally on your computer (installation instructions can be found on each of the websites).

    git clone https://github.com/mirceageorgescu/beerlog.git
    npm install
    bower install

## Build
    
    grunt build

## Run the server

    grunt serve

## Deploy to Heroku
Signup to [Heroku](http://heroku.com) and then ask to be added as a collaborator and then download and install [Heroku Toolbelt](https://toolbelt.herokuapp.com).

Login to heroku:

    heroku login
    
Add your key to heroku:

    heroku keys:add

Deploy the app:

    ./heroku/deploy

## How do you keep track of stuff?
We use a [trello board](https://trello.com/b/dJorGPsW/beerlog-app). Go have a look, it's public.