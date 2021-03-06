import { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container } from '@material-ui/core';
import PostsCard from '@zoonk/components/PostsCard';
import PostShare from '@zoonk/components/PostShare';
import Meta from '@zoonk/components/Meta';
import GroupsBreadcrumb from '@zoonk/components/GroupsBreadcrumb';
import { analytics, GlobalContext, theme } from '@zoonk/utils';

const GroupPosts: NextPage = () => {
  const { translate } = useContext(GlobalContext);
  const { query } = useRouter();
  const groupId = String(query.id);

  useEffect(() => {
    analytics().setCurrentScreen('group_posts');
  }, []);

  return (
    <Container component="main">
      <Meta title={translate('posts')} noIndex />
      <GroupsBreadcrumb groupId={groupId} title={translate('posts')} />
      <PostShare category="posts" groupId={groupId} />
      <div style={{ margin: theme.spacing(1, 0) }} />
      <PostsCard category={['posts', 'lessons']} groupId={groupId} limit={10} />
    </Container>
  );
};

export default GroupPosts;
