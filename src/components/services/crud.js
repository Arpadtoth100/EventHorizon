import { database } from '../../config/firebase';
import {
  ref,
  set,
  // push, get, update, remove
} from 'firebase/database';
// import {
//   onChildAdded,
//   onChildChanged,
//   onChildRemoved,
// } from 'firebase/database';

const endpoint = 'userDetails/';

export function createUser(userId, username, organization, location) {
  set(ref(database, endpoint + userId), {
    username,
    organization,
    location,
  });
}
