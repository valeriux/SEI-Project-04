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


## Natural Products

This was a pair-coding, hackathon project at General Assembly.

The brief was to:

* Consume a publicly available API and it was Thedogapi API.
* Deliver the data back in a React app

## Installation

* Clone or Download the repo and from the terminal run the following commands:
  - yarn to install JavaScript packages.
  - pipenv to install Python packages.
* Next run: 
  - yarn seeds to create the initial data for the database
  - yarn run:server
  - yarn run:client


## App overview

The application allows a user to search for a dog breed, returning the results under the search input. 
To search you have two options:
* You can select the breed from the list.
* You can write for a specific breed

In order to implement the search we used react-select. We did two axios request:

<img width="1192" alt="Screenshot 2019-07-12 at 04 08 54" src="https://user-images.githubusercontent.com/47470930/61118145-bb221e80-a45d-11e9-8c08-a391d9da8f62.png">

<img width="697" alt="Screenshot 2019-07-12 at 04 18 16" src="https://user-images.githubusercontent.com/47470930/61117542-5c0fda00-a45c-11e9-9b2a-0d8931315e85.png">

* The first one was to obtain the breed with the value that was selected.
* The second one was to obtain the image per value.

## Future enhancements

* Add an endpoint in the Home page to generate a Random dog.
* Implement a search to show a list of similar dog names.
