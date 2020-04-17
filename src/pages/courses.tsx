import { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { Container } from '@material-ui/core';
import Meta from '@zoonk/components/Meta';
import PostsCard from '@zoonk/components/PostsCard';
import SidebarPage from '@zoonk/components/SidebarPage';
import { analytics, GlobalContext, rootUrl } from '@zoonk/utils';

const Courses: NextPage = () => {
  const { translate } = useContext(GlobalContext);

  useEffect(() => {
    analytics().setCurrentScreen('courses');
  }, []);

  return (
    <Container component="main">
      <Meta
        title={translate('courses')}
        description={translate('seo_courses_desc')}
        canonicalUrl={`${rootUrl}/courses`}
      />
      <SidebarPage>
        <PostsCard category={['courses']} limit={10} listOnly allowLoadMore />
      </SidebarPage>
    </Container>
  );
};

export default Courses;
