import * as firebase from '@firebase/testing';
import {
  initializeAdminApp,
  initializeFbApp,
  loadFirestoreRules,
  removeApps,
} from '../../helpers';

let admin: firebase.firestore.Firestore;
let db: firebase.firestore.Firestore;
let collection: firebase.firestore.CollectionReference;
let doc: firebase.firestore.DocumentReference;

beforeAll(async (done) => {
  admin = initializeAdminApp();
  db = initializeFbApp({ uid: 'currentUser' });
  collection = db.collection('posts/newItem/progress');
  doc = collection.doc('currentUser');
  await loadFirestoreRules();
  done();
});

afterAll(async (done) => {
  await removeApps();
  done();
});

test('can create', async (done) => {
  await firebase.assertSucceeds(doc.set({ completed: true }));
  done();
});

test('users can read their own data', async (done) => {
  await firebase.assertSucceeds(doc.get());
  done();
});

test('cannot read data from other users', async (done) => {
  const ref = db.doc('posts/newItem/progress/otherUser');
  await firebase.assertFails(ref.get());
  done();
});

test('users can update their own data', async (done) => {
  await firebase.assertSucceeds(doc.update({ completed: false }));
  done();
});

test('cannot update data from other users', async (done) => {
  const ref = db.doc('posts/newItem/progress/otherUser');
  await firebase.assertFails(ref.set({ completed: true }));
  await admin.doc('posts/newItem/progress/otherUser').set({ completed: true });
  await firebase.assertFails(ref.update({ completed: false }));
  done();
});

test('cannot delete data', async (done) => {
  const ref = db.doc('posts/newItem/progress/currentUser');
  await firebase.assertFails(ref.delete());
  done();
});

test('cannot list data', async (done) => {
  await firebase.assertFails(collection.get());
  done();
});

test('completed should be a boolean', async (done) => {
  await firebase.assertFails(doc.update({ completed: '123' }));
  await firebase.assertFails(doc.update({ completed: 123 }));
  await firebase.assertFails(doc.update({ completed: [false] }));
  await firebase.assertFails(doc.update({ completed: { completed: true } }));
  await firebase.assertFails(doc.update({ completed: null }));
  done();
});
