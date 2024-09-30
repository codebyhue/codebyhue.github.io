import firebase from 'firebase/app';
import 'firebase/database';

import firebaseConfig from './firebase-config';

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export function handleSubmit(formData) {
  database.ref('formData').push(formData)
    .then(() => {
      console.log('Data submitted successfully!');
    })
    .catch((error) => {
      console.error('Error submitting data:', error);
    });
}