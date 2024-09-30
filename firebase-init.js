const firebaseConfig = {
  apiKey: "AIzaSyCxnMMxjC3TeO3FqkununCGmbveLkY_tmc",
  authDomain: "brielle-cosmetics.firebaseapp.com",
  databaseURL: "https://brielle-cosmetics-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "brielle-cosmetics",
  storageBucket: "brielle-cosmetics.appspot.com",
  messagingSenderId: "512329373712",
  appId: "1:512329373712:web:2b7171c1054eed38039295",
  measurementId: "G-6HMV0ZMC54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);