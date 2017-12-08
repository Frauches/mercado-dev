import Rebase from 're-base';
import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDOR7yBMrEgsjfIXM0xttu7hfWYfOwu8f0",
    authDomain: "mercado-dev-42bb6.firebaseapp.com",
    databaseURL: "https://mercado-dev-42bb6.firebaseio.com",
    projectId: "mercado-dev-42bb6",
    storageBucket: "",
    messagingSenderId: "883512687210"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;