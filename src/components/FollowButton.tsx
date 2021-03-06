import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, CircularProgress } from '@material-ui/core';
import { PersonAdd, PersonAddDisabled } from '@material-ui/icons';
import { Follower } from '@zoonk/models';
import { follow, getFollowStatus, unfollow } from '@zoonk/services';
import { GlobalContext } from '@zoonk/utils';

interface FollowButtonProps {
  category: Follower.Collections;
  categoryId: string;
}

const FollowButton = ({ category, categoryId }: FollowButtonProps) => {
  const { translate, user } = useContext(GlobalContext);
  const { push } = useRouter();
  const [joined, setJoined] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const color = joined ? 'secondary' : 'primary';
  const followLabel =
    category === 'groups' ? translate('join') : translate('follow');
  const unfollowLabel =
    category === 'groups' ? translate('leave') : translate('unfollow');
  const icon = joined ? <PersonAddDisabled /> : <PersonAdd />;

  useEffect(() => {
    let unsubscribe = () => {};
    if (user) {
      unsubscribe = getFollowStatus(category, categoryId, user.uid, setJoined);
    }
    return () => unsubscribe();
  }, [category, categoryId, user]);

  const toggleFollow = () => {
    if (!user) {
      push(`/login?redirect=/${category}/${categoryId}`);
      return;
    }

    setLoading(true);
    const fn = joined ? unfollow : follow;
    fn(category, categoryId, user.uid)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  return (
    <Button
      variant="outlined"
      color={color}
      onClick={toggleFollow}
      disabled={loading}
      startIcon={loading ? <CircularProgress size={10} color={color} /> : icon}
    >
      {joined ? unfollowLabel : followLabel}
    </Button>
  );
};

export default FollowButton;
