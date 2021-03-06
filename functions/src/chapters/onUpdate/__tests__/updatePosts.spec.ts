import functions from 'firebase-functions-test';
import * as admin from 'firebase-admin';
import { when } from 'jest-when';

const testEnv = functions();
const db = admin.firestore();
const batch = db.batch();

import { onUpdateChapterUpdatePosts } from '../updatePosts';

test('return when there are no changes', async (done) => {
  const data = { description: 'description', title: 'title' };
  const change = {
    before: { data: () => data },
    after: { data: () => ({ ...data, likes: 10 }) },
  };
  const wrapped = testEnv.wrap(onUpdateChapterUpdatePosts);
  const req = await wrapped(change);

  expect(req).toBe(false);
  expect(db.doc).not.toHaveBeenCalled();
  expect(batch.commit).not.toHaveBeenCalled();
  done();
});

test('update all posts', async (done) => {
  spyOn(db.batch(), 'commit').and.returnValue('updated');
  when(db.doc as any)
    .calledWith('posts/ex1')
    .mockReturnValue('ex1Ref')
    .calledWith('posts/ex2')
    .mockReturnValue('ex2Ref')
    .calledWith('posts/les1')
    .mockReturnValue('les1Ref')
    .calledWith('posts/les2')
    .mockReturnValue('les2Ref');

  const oldData = { description: 'description', title: 'title' };
  const newData = { description: 'new desc', title: 'new title' };
  const change = {
    before: { data: () => oldData },
    after: {
      data: () => ({
        ...newData,
        examples: ['ex1', 'ex2'],
        lessons: ['les1', 'les2'],
      }),
      id: 'chapterId',
    },
  };
  const wrapped = testEnv.wrap(onUpdateChapterUpdatePosts);
  const req = await wrapped(change);
  const payload = { chapterData: { ...newData, id: 'chapterId' } };

  expect(req).toBe('updated');
  expect(db.doc).toHaveBeenCalledWith('posts/ex1');
  expect(db.doc).toHaveBeenCalledWith('posts/ex2');
  expect(db.doc).toHaveBeenCalledWith('posts/les1');
  expect(db.doc).toHaveBeenCalledWith('posts/les2');
  expect(batch.update).toHaveBeenCalledWith('ex1Ref', payload);
  expect(batch.update).toHaveBeenCalledWith('ex2Ref', payload);
  expect(batch.update).toHaveBeenCalledWith('les1Ref', payload);
  expect(batch.update).toHaveBeenCalledWith('les2Ref', payload);
  expect(batch.commit).toHaveBeenCalled();
  done();
});
