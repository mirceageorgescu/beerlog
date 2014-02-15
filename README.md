# beerlog

## What is this thing?
It's a simple web app that helps users keep a beer log

## Project setup

First of all you will need to install [node.js](http://nodejs.org), [Compass](http://compass-style.org/install/) and [mongodb](http://www.mongodb.org/downloads) globally on your computer (installation instructions can be found on each of the websites).

    git clone https://github.com/mirceageorgescu/beerlog.git
    npm install
    npm install -g bower
    bower install

## Import beer db

    cd db
    mongoimport --db fullstack-dev --collection beers --file beers.json

## Build
    
    grunt build

## Run the server

    mongod
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

## Documentation

### Coding Style and Rules

1. **Use soft-tabs with two-space indent.**
2. **Use Unix Line Endings.** Default on ST2 and other Mac and Unix editors. If you're on Windows, make sure you have this.

* Sublime users: check out our [project config file](https://github.com/mirceageorgescu/beerlog/blob/master/beerlog.sublime-project).*
