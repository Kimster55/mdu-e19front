"use strict";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI_VTBj8inrJWIjIYf_Y7bBpT9aRRQS1o",
  authDomain: "user-app-289f1.firebaseapp.com",
  databaseURL: "https://user-app-289f1.firebaseio.com",
  projectId: "user-app-289f1",
  storageBucket: "user-app-289f1.appspot.com",
  messagingSenderId: "438369021654",
  appId: "1:438369021654:web:8138ce7351d51603c0a377"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const userRef = db.collection("users");

// watch the database ref for changes
userRef.onSnapshot(function (snapshotData) {
  let users = snapshotData.docs;
  console.log(users);
  appendUsers(users);
});

// append users to the DOM
function appendUsers(users) {
  let htmlTemplate = "";
  for (let user of users) {
    console.log(user.id);
    console.log(user.data().name);
    htmlTemplate += `
    <article>
      <h2>${user.data().name}</h2>
      <p><a href="mailto:${user.data().mail}">${user.data().mail}</a></p>
    </article>
    `;
  }
  document.querySelector('#content').innerHTML = htmlTemplate;
}