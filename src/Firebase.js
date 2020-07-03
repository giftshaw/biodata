import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyCDEhNkQHaXXgUpYrTrULxA4aL-1UkRc7I",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "Yhttps://sample-data-8bbbf.firebaseio.com",
  projectId: "sample-data-8bbbf",
  storageBucket: "YOUR_STORAGE_BUCKET"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;