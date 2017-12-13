import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDOR7yBMrEgsjfIXM0xttu7hfWYfOwu8f0",
    authDomain: "mercado-dev-42bb6.firebaseapp.com",
    databaseURL: "https://mercado-dev-42bb6.firebaseio.com",
    projectId: "mercado-dev-42bb6",
    storageBucket: "gs://mercado-dev-42bb6.appspot.com",
    messagingSenderId: "883512687210"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export const storage = app.storage();
export default base;