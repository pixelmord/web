import { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { Container, Grid, makeStyles } from '@material-ui/core';
import ChaptersCard from '@zoonk/components/ChaptersCard';
import Meta from '@zoonk/components/Meta';
import MenuCommunity from '@zoonk/components/MenuCommunity';
import PostsCard from '@zoonk/components/PostsCard';
import PostShare from '@zoonk/components/PostShare';
import TopicDetails from '@zoonk/components/TopicDetails';
import TopicsBreadcrumb from '@zoonk/components/TopicsBreadcrumb';
import { Topic } from '@zoonk/models';
import { getTopic } from '@zoonk/services';
import { analytics, appLanguage, GlobalContext, preRender } from '@zoonk/utils';

const useStyles = makeStyles((theme) => ({
  column: {
    '& > *': {
      marginBottom: theme.spacing(2),
    },
  },
}));

interface TopicPageProps {
  topic: Topic.Get;
}

const TopicPage: NextPage<TopicPageProps> = ({ topic }) => {
  const { translate } = useContext(GlobalContext);
  const classes = useStyles();
  const { chapterData, id, language, photo, title } = topic;

  useEffect(() => {
    analytics().setCurrentScreen('topic');
  }, []);

  return (
    <Container component="main">
      <Meta
        title={translate('learn_about', { title })}
        description={translate('seo_topic_desc', { title })}
        image={photo}
        canonicalUrl={`https://${language}.zoonk.org/topics/${id}`}
        noIndex={appLanguage !== language}
      />

      <TopicsBreadcrumb title={title} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} className={classes.column}>
          <TopicDetails topic={topic} />
          <MenuCommunity category="topics" id={id} />
        </Grid>

        <Grid item xs={12} sm={6} md={8} className={classes.column}>
          <PostShare
            title={translate('post_share_topic', { title })}
            topicId={id}
          />
          <ChaptersCard chapters={chapterData} />
          <PostsCard topicId={id} limit={10} displayFilter />
        </Grid>
      </Grid>
    </Container>
  );
};

TopicPage.getInitialProps = async ({ query }) => {
  const topic = await getTopic(String(query.id));
  preRender();
  return { topic };
};

export default TopicPage;
