import { Divider, makeStyles, Paper } from '@material-ui/core';
import BlockButtons from './BlockButtons';
import FormatButtons from './FormatButtons';
import MediaButtons from './MediaButtons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    padding: theme.spacing(0.5),
    display: 'flex',
    zIndex: 20,
  },
  divider: {
    margin: theme.spacing(1, 0.5),
  },
}));

const Toolbar = () => {
  const classes = useStyles();

  return (
    <Paper square elevation={10} className={classes.root}>
      <FormatButtons />
      <Divider flexItem orientation="vertical" className={classes.divider} />
      <MediaButtons />
      <Divider flexItem orientation="vertical" className={classes.divider} />
      <BlockButtons />
    </Paper>
  );
};

export default Toolbar;
