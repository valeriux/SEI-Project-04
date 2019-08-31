# GA - SEI - PROJECT-04 (Natural Products)

<img width="1382" alt="Screenshot 2019-07-12 at 04 55 06" src="https://user-images.githubusercontent.com/47470930/61119808-36d19a80-a461-11e9-8124-ce2843efbf46.png">


# Timeframe

* 5 days (Solo project)

# Technologies used

* React
* React-select
* ReactMapBox-GL
* Webpack
* HTML5
* SCSS
* JavaScript (ES6)
* Python
* PostgreSQL
* Flask
* Git/GitHub
* Bulma (CSS Framework)


## Natural Products - Project

The brief was to build a full-stack application with a React front-end and PostgreSQL database. The application had to include data schema and a RESTful api framework to enable a user to register, login and add content.

The application is deployed via Git on Heroku and can be found here: [Natura cosmetics](https://natura-cosmetics.herokuapp.com/#/)

## Installation

* Clone or Download the repo and from the terminal run the following commands:
  - yarn to install JavaScript packages.
  - pipenv to install Python packages.

* Next run:
  - yarn seeds to create the initial data for the database
  - yarn run:server - To launch the server
  - yarn run:client - To launch the front-end


## Overview

Natura is a top cosmetic and recognized brand in Latin America. Currently they are more than 1,170 corporate business located in 37 countries. The company operates a network of 1.7 million sales consultants throughout the world.

At present in Peru, is not possible for people who want to acquire Natura products asap, be able to locate the places where they are sell and the availability of them.

Natural products application allows a user to register, login, add products, edit content, find Natura products’ location, search products and check availability.


## Development Process

The project started with an entity-relationship diagram (ERD), was created my project's storyboards on powerpoint to baseline my scope to after that prioritize tasks on Trello.

<img width="762" alt="Screenshot 2019-07-12 at 10 19 17" src="https://user-images.githubusercontent.com/47470930/61139221-8b3f3f00-a48e-11e9-9b8f-20df88204cb4.png">

Before building the front end I tested the API endpoints using Insomnia.

<img width="860" alt="Screenshot 2019-07-12 at 10 32 39" src="https://user-images.githubusercontent.com/47470930/61140071-61871780-a490-11e9-94be-8fdaa683c213.png">


#### API endpoints

Endpoints were built out for:

* Login and registration (POST)
* Categories (POST and EDIT)
* Products - (GET, POST, EDIT, DELETE)

## Future enhancements

* Add a shopping cart.
* Add comments to products.
