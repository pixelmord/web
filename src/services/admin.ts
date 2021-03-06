import { Admin } from '@zoonk/models';
import { db } from '../utils';

/**
 * Get some collection stats.
 */
export const getStats = async (): Promise<Admin.Stats> => {
  const stats = await db.doc('admin/stats').get();
  const data = stats.data() as Admin.Stats;
  return data;
};
