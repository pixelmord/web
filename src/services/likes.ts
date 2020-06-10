import { db } from '@zoonk/firebase/db';
import { ItemLike } from '@zoonk/models';

/**
 * Check if a user has liked an item or not.
 * @returns `true` if the item has been liked.
 * @returns `false` if the item has NOT been liked yet.
 */
export const getLikedStatus = (
  itemPath: string,
  uid: string,
  onSnapshot: (liked: boolean) => void,
): firebase.Unsubscribe => {
  return db.doc(`${itemPath}/likes/${uid}`).onSnapshot((snap) => {
    const data = snap.data() as ItemLike | undefined;
    onSnapshot(Boolean(data?.like));
  });
};

/**
 * Toggle the current "like" state
 */
export const toggleLike = (
  itemPath: string,
  uid: string,
  current: boolean,
): Promise<void> => {
  return db
    .doc(`${itemPath}/likes/${uid}`)
    .set({ like: !current }, { merge: true });
};
