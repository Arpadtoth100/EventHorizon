import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyApeyF1gjyvUtOhkBbgxvLDykGjSIRZ_ys',
  authDomain: 'team2project-97c57.firebaseapp.com',
  databaseURL:
    'https://team2project-97c57-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'team2project-97c57',
  storageBucket: 'team2project-97c57.appspot.com',
  messagingSenderId: '535773412632',
  appId: '1:535773412632:web:5ed3db69ad094a2222326d',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
