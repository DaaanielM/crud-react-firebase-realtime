import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBNgZqLJuqhMDjCURJTcc5wVpZyZAHlr8k',
	authDomain: 'realtimefirebase-6d81e.firebaseapp.com',
	projectId: 'realtimefirebase-6d81e',
	storageBucket: 'realtimefirebase-6d81e.appspot.com',
	messagingSenderId: '281972178312',
	appId: '1:281972178312:web:36ce6e508aad66a064ce3d',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
