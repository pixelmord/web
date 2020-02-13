import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import NextLink from 'next/link';
import { Post } from '@zoonk/models';

interface PostListItemProps {
  divider?: boolean;
  item: Post.Get;
}

/**
 * Display a single post as a list item.
 */
const PostListItem = ({ divider, item }: PostListItemProps) => {
  const { content, createdBy, title } = item;

  return (
    <NextLink href="/posts/[id]" as={`/posts/${item.id}`} passHref>
      <ListItem
        alignItems="flex-start"
        button
        component="a"
        divider={divider}
        disableGutters
      >
        <ListItemAvatar>
          <Avatar src={createdBy.photo || undefined} />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={content.slice(0, 200)}
          secondaryTypographyProps={{
            gutterBottom: false,
            noWrap: true,
          }}
        />
      </ListItem>
    </NextLink>
  );
};

export default PostListItem;
