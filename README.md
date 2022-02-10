# Screamstastic

Social Media App

## Technologies

### Back-end

* Google Firebase -  firebase.google.com
    * Cloud Firestore - *Data Base*
    * Cloud Functions - *Functions*
    * Firebase Authentication - *Register and login users , Authentication tokens*
    * Cloud Storage Service - *Store images*

### Front-end

* React -
    * Busboy *file uploader*
    * Material UI - *Google Material Design Standars, like a CSS framework*
    * Express - *Cloud Functions*
    * React Redux \ Redux Dev Tools - *Broser tools* *Manage data between * React Componens*
    * NodeJS - *NPM to install some of the packages*
    * VSCode - *Text Editor*
        * Bracket Pair Colorizer - *Colorize brackets*
        * Prettier - *Code autoformat on save*
        * ES7 React/Redux/GraphQL/React-Native Snippets - *Snipets to type less code*

### REST API integration

* Postman - *Run API request*

# Developing

The environment was done in a docker image, so you only need to run the docker image using the make commands:

| Command               | Description   |
| -------------         |:-------------:| 
| `make build-image`    | builds the image node and firebase tools | 
| `make run-image`      | runs the image with all dependencies in it  |
| `fireabse login`      | login on google firebase |
| `firebase serve`      | runs API link locally  |
| `firebase deploy`     | runs API through google servers |
You'll also need to create a .env file (you can use .env.example as an example)

# Useful commands

* Install Firebase-tools: 
    ```bash
    $ npm install firebase-tools
    ```

* login on firebase:
    ```bash
    $ firebase login*
    ```

* Initialize firebase:
    ```bash
    $ firebase init
    ```
    > **Functions**: Configure and deploy
      **Firebase Hosting sites**: *Select Project* - *JavaScript* - *ESLint: no* - *Install dependencies with NPM: yes*
