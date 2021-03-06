import { useContext } from 'react';
import NextLink from 'next/link';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Paper,
} from '@material-ui/core';
import { Profile } from '@zoonk/models';
import { GlobalContext } from '@zoonk/utils';

interface ItemCreditsProps {
  editors: Profile.Get[];
  title?: string;
}

/**
 * Display credits for an item (all editors).
 */
const ItemCredits = ({ editors, title }: ItemCreditsProps) => {
  const { translate } = useContext(GlobalContext);

  if (editors.length === 0) {
    return null;
  }

  return (
    <Paper variant="outlined">
      <List
        disablePadding
        subheader={
          <ListSubheader component="div">
            {title || translate('editors')}
          </ListSubheader>
        }
      >
        {editors.map((editor) => (
          <NextLink
            href="/profile/[id]"
            as={`/profile/${editor.username}`}
            passHref
            key={editor.id}
          >
            <ListItem alignItems="flex-start" button component="a">
              <ListItemAvatar>
                <Avatar src={editor.photo || undefined} alt={editor.name} />
              </ListItemAvatar>
              <ListItemText primary={editor.name} secondary={editor.bio} />
            </ListItem>
          </NextLink>
        ))}
      </List>
    </Paper>
  );
};

export default ItemCredits;
