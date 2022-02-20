const functions = require("firebase-functions");
const app = require('express')();
const FBAuth = require('./util/fbAuth');

const { db } = require('./util/admin');

const { getAllScreams,
        postOneScream,
        getScream,
        commentOnScream,
        likeScream,
        unlikeScream,
        deleteScream } = require('./handlers/screams');
const { signup,
        login,
        uploadImage,
        addUserDetails,
        getAuthenticatedUser,
        getUserDetails,
        markNotificationsRead } = require('./handlers/users');

const fbAuth = require("./util/fbAuth");

// Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);
app.get('/scream/:screamId', getScream);
app.delete('/scream/:screamId', FBAuth, deleteScream);
app.post('/scream/:screamId/comment', FBAuth, commentOnScream);
app.get('/scream/:screamId/like', FBAuth, likeScream);
app.get('/scream/:screamId/unlike', FBAuth, unlikeScream);

// Users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', fbAuth, addUserDetails);
app.get('/user', fbAuth, getAuthenticatedUser);
app.get('/user/:handle', getUserDetails);
app.post('/notifications', markNotificationsRead);

exports.api = functions.https.onRequest(app);

// DATABASE TRIGGER FUNCTIONS
exports.CreateNotificationOnLike = functions
    .firestore
    .document('likes/{id}')
    .onCreate(async (snapshot) => {
        try {
            const scream = await db.doc(`/screams/${snapshot.data().screamId}`).get()
            if(scream.exists && scream.data().userHandle !== snapshot.data().userHandle){
                return await db.doc(`notifications/${snapshot.id}`).set({
                    createdAt: new Date().toISOString(),
                    recipient: scream.data().userHandle,
                    sender: snapshot.data().userHandle,
                    type: 'like',
                    read: false,
                    screamId: scream.id
                })
            }
        } catch (err) {
            console.error(err)
        }
    })

exports.deleteNotificationsOnUnlike = functions
    .firestore
    .document('likes/{id}')
    .onDelete(async snapshot => {
        try {
            return await db.doc(`notifications/${snapshot.id}`).delete();
        } catch (err) {
            console.error(err)
        }
    })

exports.createNotificationOnComment = functions
    .firestore
    .document('comments/{id}')
    .onCreate(async snapshot => {
        try {
            const scream = await db.doc(`screams/${snapshot.data().screamId}`).get()
            if(scream.exists && scream.data().userHandle !== snapshot.data().userHandle){
                return await db.doc(`notifications/${snapshot.id}`).set({
                    createdAt: new Date().toISOString(),
                    recipient: scream.data().userHandle,
                    sender: snapshot.data().userHandle,
                    type: 'comment',
                    read: false,
                    screamId: scream.id
                })
            };
        } catch (err) {
            console.error(err)
        }
    });

// exports.createNotificationOnLike = functions.firestore.document('likes/{id}')
//   .onCreate( async (snapshot) => {

//     try {
//       return await db.doc(`/screams/${snapshot.data().screamId}`).get()
//         .then(doc => {
//           if(doc.exist  && doc.data().userHandle !== snapshot.data().userHandle){
//             return db.doc(`/notifications/${snapshot.id}`).set({
//               createdAt: new Date().toISOString(),
//               recipient: doc.data().userHandle,
//               sender: snapshot.data().userHandle,
//               type: 'like',
//               read: false,
//               screamId: doc.id
//             });
//           }
//         })
//         .catch((err) => 
//           console.error(err));
//     }catch(err){
//       console.error(err);
//     }
//   });

// exports.createNotificationOnUnLike = functions.firestore.document('likes/{id}')
// .onDelete( async (snapshot) => {
//   try{
//     return await db.doc(`/notifications/${snapshot.id}`)
//     .delete()
//     .catch((err) => {
//       console.error(err);
//       return;
//     });
//   } catch(err){
//     console.error(err);
//   }
// });

// exports.createNotificationOnComment = functions.firestore.document('comments/{id}')
//   .onCreate( async (snapshot) => {
//     try{
//       return await db.doc(`/screams/${snapshot.data().screamId}`).get()
//       .then((doc) => {
//         if(doc.exist && doc.data().userHandle !== snapshot.data().userHandle){
//           return db.doc(`/notifications/${snapshot.id}`).set({
//             createdAt: new Date().toISOString(),
//             recipient: doc.data().userHandle,
//             sender: snapshot.data().userHandle,
//             type: 'comment',
//             read: false,
//             screamId: doc.id
//           });
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         return;
//       });
//     }catch(err){
//       console.error(err);
//     }
//   });
