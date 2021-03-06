import { useContext } from 'react';
import NextLink from 'next/link';
import { Link, Typography } from '@material-ui/core';
import { Post } from '@zoonk/models';
import { GlobalContext, getPageTitle, theme } from '@zoonk/utils';

interface NoLessonsProps {
  category: Post.Category;
  chapterId: string;
  topicId: string;
}

/**
 * Display a message when no lessons are found for a request.
 */
const NoLessons = ({ category, chapterId, topicId }: NoLessonsProps) => {
  const { translate } = useContext(GlobalContext);
  const title = getPageTitle(topicId);

  return (
    <div style={{ margin: theme.spacing(2, 0) }}>
      {category === 'examples' && (
        <Typography variant="body2" color="textSecondary">
          {translate('no_chapter_examples', { title })}{' '}
          <NextLink
            href={`/posts/add?category=examples&topicId=${topicId}&chapterId=${chapterId}`}
            passHref
          >
            <Link>{translate('example_share')}</Link>
          </NextLink>
          .
        </Typography>
      )}

      {category !== 'examples' && (
        <Typography variant="body2" color="textSecondary">
          {translate('no_lessons', { title })}{' '}
          <NextLink
            href={`/posts/add?category=lessons&topicId=${topicId}&chapterId=${chapterId}`}
            passHref
          >
            <Link>{translate('teach_lesson_title')}</Link>
          </NextLink>
          .
        </Typography>
      )}
    </div>
  );
};

export default NoLessons;
