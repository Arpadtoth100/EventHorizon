import { database } from '../config/firebase';
import {
  ref,
  set,
  push,
  //get, update, remove
} from 'firebase/database';
// import {
//   onChildAdded,
//   onChildChanged,
//   onChildRemoved,
// } from 'firebase/database';

const userEndpoint = 'userDetails/';
const eventEndpoint = 'events';

export function createUser(userId, username, organization, location) {
  set(ref(database, userEndpoint + userId), {
    username,
    organization,
    location,
  });
}

export function createEvent(eventData) {
  const refEvent = ref(database, eventEndpoint);
  const newRefEvent = push(refEvent);
  return set(newRefEvent, eventData);
}
