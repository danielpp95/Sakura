import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: 'AIzaSyA23s3g_tN95IQ7tah1XlvvShLHZmMJnvc',
    authDomain: 'sakura-api.firebaseapp.com',
    databaseURL: 'https://sakura-api.firebaseio.com',
    projectId: 'sakura-api',
    storageBucket: 'sakura-api.appspot.com',
    messagingSenderId: '702526533326',
    appId: '1:702526533326:web:459f727c7fb20eec80aa9f'
};

firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
export const storage = firebase.storage();