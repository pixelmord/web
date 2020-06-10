import { useEffect, useContext } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Container } from '@material-ui/core';
import Meta from '@zoonk/components/Meta';
import PostList from '@zoonk/components/PostList';
import SidebarPage from '@zoonk/components/SidebarPage';
import TimelineHeader from '@zoonk/components/TimelineHeader';
import { getAllPosts } from '@zoonk/services';
import { analytics, GlobalContext, rootUrl } from '@zoonk/utils';

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getAllPosts();
  return { props: { posts } };
};

const Home = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { translate, user } = useContext(GlobalContext);

  useEffect(() => {
    analytics().setCurrentScreen('home');
  }, []);

  return (
    <Container component="main">
      <Meta
        title={translate('seo_home_title')}
        description={translate('seo_home_desc')}
        canonicalUrl={rootUrl}
        noAppName
      />
      <SidebarPage title={translate('post_share')}>
        {user && <TimelineHeader active="all" />}
        <PostList items={posts} />
      </SidebarPage>
    </Container>
  );
};

export default Home;
