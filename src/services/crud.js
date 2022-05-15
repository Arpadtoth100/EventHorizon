import { database } from '../config/firebase';
import {
  ref,
  set,
  push,
  update,
  get,
  // remove
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

export function updateUser(id, userData) {
  const refUser = ref(database, userEndpoint + id)
  return update(refUser, userData)
}

export function createEvent(eventData) {
  const refEvent = ref(database, eventEndpoint);
  const newRefEvent = push(refEvent);
  return set(newRefEvent, eventData);
}

export function readEvent(id) {
  if(id) {
    const refEvent = ref(database, `${eventEndpoint}/${id}`)
    return get(refEvent);
  }
  const refEvent = ref(database, eventEndpoint)
  return get(refEvent);
}

