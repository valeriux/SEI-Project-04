# GA - SEI - PROJECT-04 (Natural Products)

<img width="1382" alt="Screenshot 2019-07-12 at 04 55 06" src="https://user-images.githubusercontent.com/47470930/61119808-36d19a80-a461-11e9-8124-ce2843efbf46.png">


# Timeframe

* 7 days (Solo project)

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

The application is deployed via Git on Heroku and can be found here: [Cabin Fever](https://natura-products.herokuapp.com/#/)

## Installation

* Clone or Download the repo and from the terminal run the following commands:
  - yarn to install JavaScript packages.
  - pipenv to install Python packages.
* Next run: 
  - yarn seeds to create the initial data for the database
  - yarn run:server
  - yarn run:client


## App overview

Natura is a top cosmetic and recognized brand in Latin America. Currently they are more than 1,170 corporate business located in 37 countries. The company operates a network of 1.7 million sales consultants throughout the world.

At present in Peru, is not possible for people who want to acquire Natura products asap, be able to locate the places where they are sell and the availability of them. 

The application allows a user to register, login, add products and edit content, find Natura products’ location, to search products and check availability. 
 

In order to implement the search we used react-select. We did two axios request:

<img width="1192" alt="Screenshot 2019-07-12 at 04 08 54" src="https://user-images.githubusercontent.com/47470930/61118145-bb221e80-a45d-11e9-8c08-a391d9da8f62.png">

<img width="697" alt="Screenshot 2019-07-12 at 04 18 16" src="https://user-images.githubusercontent.com/47470930/61117542-5c0fda00-a45c-11e9-9b2a-0d8931315e85.png">

* The first one was to obtain the breed with the value that was selected.
* The second one was to obtain the image per value.

## Future enhancements

* Add an endpoint in the Home page to generate a Random dog.
* Implement a search to show a list of similar dog names.
