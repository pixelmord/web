import { Fragment, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Editor, Node } from 'slate';
import { useSlate } from 'slate-react';
import { Divider, makeStyles, Paper } from '@material-ui/core';
import BlockButtons from './BlockButtons';
import FormatButtons from './FormatButtons';
import MediaButtons from './MediaButtons';

const ImageToolbar = dynamic(() => import('./ImageToolbar'));

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

interface ToolbarActive {
  type: 'general' | 'image';
  node?: Node;
}

const Toolbar = () => {
  const [active, setActive] = useState<ToolbarActive>({ type: 'general' });
  const classes = useStyles();
  const editor = useSlate();
  const [nodes] = Editor.nodes(editor);
  const [image] = Editor.nodes(editor, {
    match: (n) => n.type === 'image',
  });
  const imageEl = image?.[0];
  const hasNodes = Boolean(nodes);

  useEffect(() => {
    if (imageEl) setActive({ type: 'image', node: imageEl });
  }, [imageEl]);

  useEffect(() => {
    if (hasNodes && !imageEl) setActive({ type: 'general' });
  }, [hasNodes, imageEl]);

  return (
    <Paper square elevation={10} className={classes.root}>
      {active.type === 'general' && (
        <Fragment>
          <FormatButtons />
          <Divider
            flexItem
            orientation="vertical"
            className={classes.divider}
          />
          <MediaButtons />
          <Divider
            flexItem
            orientation="vertical"
            className={classes.divider}
          />
          <BlockButtons />
        </Fragment>
      )}

      {active.type === 'image' && active.node && (
        <ImageToolbar element={active.node} />
      )}
    </Paper>
  );
};

export default Toolbar;
