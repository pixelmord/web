import { useEffect, useContext } from 'react';
import { NextPage } from 'next';
import { CircularProgress, Container } from '@material-ui/core';
import LoginForm from '@zoonk/components/LoginForm';
import Meta from '@zoonk/components/Meta';
import SidebarPage from '@zoonk/components/SidebarPage';
import TimelineCard from '@zoonk/components/TimelineCard';
import TimelineHeader from '@zoonk/components/TimelineHeader';
import { analytics, GlobalContext } from '@zoonk/utils';

const Following: NextPage = () => {
  const { translate, user } = useContext(GlobalContext);

  useEffect(() => {
    analytics().setCurrentScreen('following');
  }, []);

  if (user === undefined) {
    return <CircularProgress />;
  }

  if (user === null) {
    return <LoginForm />;
  }

  return (
    <Container component="main">
      <Meta title={translate('seo_home_title')} noAppName noIndex />
      <SidebarPage title={translate('post_share')}>
        <TimelineHeader active="following" />
        <TimelineCard limit={10} userId={user.uid} />
      </SidebarPage>
    </Container>
  );
};

export default Following;
