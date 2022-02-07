// require('dotenv').config();
const functions = require("firebase-functions");

// const { user } = require("firebase-functions/v1/auth");

const app = require('express')();

const FBAuth = require('./util/fbAuth');

const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login } = require('./handlers/users');

// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
//   measurementId: process.env.MEASUREMENTID
// };

// const firebase = require('firebase');
// firebase.initializeApp(config);
// const { object } = require('firebase-functions/v1/storage');
// const { config } = require("dotenv");
// const { isEmailIdentifier } = require('firebase-admin/lib/auth/identifier');

// Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);

// Users routes
app.post('/signup', signup);
app.post('/login', login);

exports.api = functions.https.onRequest(app);
