import { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Button, Container } from '@material-ui/core';
import GroupList from '@zoonk/components/GroupList';
import Meta from '@zoonk/components/Meta';
import TopicsBreadcrumb from '@zoonk/components/TopicsBreadcrumb';
import { analytics, GlobalContext, rootUrl, theme } from '@zoonk/utils';

const TopicGroups: NextPage = () => {
  const { translate } = useContext(GlobalContext);
  const { query } = useRouter();
  const topicId = String(query.id);

  useEffect(() => {
    analytics().setCurrentScreen('topic_groups');
  }, []);

  return (
    <Container component="main">
      <Meta
        title={translate('groups')}
        description={translate('seo_groups_desc')}
        canonicalUrl={`${rootUrl}/topics/${topicId}/groups`}
        noIndex
      />
      <TopicsBreadcrumb topicId={topicId} title={translate('groups')} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: theme.spacing(1),
        }}
      >
        <NextLink href={`/groups/add?topicId=${topicId}`} passHref>
          <Button component="a" color="primary" variant="outlined">
            {translate('group_create')}
          </Button>
        </NextLink>
      </div>
      <GroupList allowLoadMore limit={10} topicId={topicId} />
    </Container>
  );
};

export default TopicGroups;
