# Mobi Gist

## Overview

This application demonstrates listing a GitHub user's gists by providing the user's GitHub username. The functional requirements are as follows:

* **Search**: When a user enters a username, it should be able to get a full list of public Gists by that user.
* **Filetype**: Convert the filetypes of the files in the gist into a tag/badge, (e.g, if the returned gist has list of files containing python and JavaScript files, the gist should have the respective tags/badges). *Extra: the badges are color-coded.*
* **Fork**: Username/Avatar of the last 3 users who forked it with avatar linking to the fork.

## Set Up

Install the dependencies:

```
  yarn install
  # OR
  npm install
```

## Run application

To run the application, run the following commands in the terminal

```
  yarn start
  # OR
  npm start
```

## Run tests

Run tests using the following commands in terminal
```
  yarn test
  # OR
  npm test
```

## Technologies Used

* React + TypeScript
* Bootstrap
* Lorem Picsum (for random images)

## Note

**GitHub has an API rate limit of 5000 requests per hour for unauthenticated requests to the REST endpoints.**

## Screenshots

![Screenshot 1](screenshots/screenshot_1.png)

![SCreenshot 2](screenshots/screenshot_2.png)