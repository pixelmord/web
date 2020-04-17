import { Grid, Hidden, makeStyles } from '@material-ui/core';
import { Post } from '@zoonk/models';
import HomeShare from './HomeShare';
import MenuPages from './MenuPages';

const useStyles = makeStyles((theme) => ({
  container: { padding: theme.spacing(2, 0) },
  column: {
    '& > *': {
      margin: theme.spacing(2, 0),
    },
  },
}));

interface SidebarPageProps {
  category?: Post.Category;
  children: React.ReactNode;
  title?: string;
}

const SidebarPage = ({ category, children, title }: SidebarPageProps) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.container}>
      <Hidden xsDown>
        <Grid item sm={3}>
          <MenuPages />
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={9} className={classes.column}>
        <HomeShare category={category} title={title} />
        {children}
      </Grid>
    </Grid>
  );
};

export default SidebarPage;