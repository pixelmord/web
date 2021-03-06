import { useContext } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
import { GlobalContext } from '@zoonk/utils';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
}));

interface TopicsHeaderProps {
  active: 'all' | 'following';
}

const TopicsHeader = ({ active }: TopicsHeaderProps) => {
  const { translate, user } = useContext(GlobalContext);
  const { push } = useRouter();
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      {user && (
        <ButtonGroup color="primary">
          <Button
            variant={active === 'following' ? 'contained' : undefined}
            disableElevation
            onClick={() => push('/topics/following')}
          >
            {translate('following')}
          </Button>
          <Button
            variant={active === 'all' ? 'contained' : undefined}
            disableElevation
            onClick={() => push('/topics')}
          >
            {translate('all')}
          </Button>
        </ButtonGroup>
      )}
      <NextLink href="/topics/add" passHref>
        <Button component="a" color="primary" variant="outlined">
          {translate('topic_create')}
        </Button>
      </NextLink>
    </nav>
  );
};

export default TopicsHeader;
