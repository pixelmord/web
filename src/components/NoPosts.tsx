import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Post } from '@zoonk/models';
import { GlobalContext, getPageTitle, theme } from '@zoonk/utils';
import EditorView from './EditorView';

interface NoPostsProps {
  category: 'groups' | 'topics';
  postCategory?: Post.Category;
  isUser?: boolean;
}

/**
 * Display a message when no posts are found for a request.
 */
const NoPosts = ({ category, postCategory, isUser }: NoPostsProps) => {
  const { translate } = useContext(GlobalContext);
  const { query } = useRouter();
  const topicId = String(query.id);
  const title = getPageTitle(topicId);
  const msg = () => {
    if (isUser) return 'no_user_posts';
    if (category === 'groups') return 'items_empty';
    switch (postCategory) {
      case 'books':
        return 'no_books';
      case 'courses':
        return 'no_courses';
      case 'examples':
        return 'no_examples';
      case 'questions':
        return 'no_questions';
      case 'posts':
        return 'no_posts';
      case 'references':
        return 'no_references';
      default:
        return 'no_references';
    }
  };

  return (
    <div style={{ margin: theme.spacing(2, 0) }}>
      <EditorView content={translate(msg(), { title, topicId })} />
    </div>
  );
};

export default NoPosts;
