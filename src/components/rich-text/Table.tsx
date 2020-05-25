import { Fragment, forwardRef } from 'react';
import dynamic from 'next/dynamic';
import { useReadOnly, useSlate } from 'slate-react';
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableContainer,
} from '@material-ui/core';
import { isBlockActive } from './blocks';

const TableActions = dynamic(() => import('./TableActions'));

const useStyles = makeStyles((theme) => ({
  root: { margin: theme.spacing(2, 0) },
  actions: { display: 'flex', alignItems: 'center' },
}));

const CustomTable = forwardRef((props, ref) => {
  const { children } = props;
  const editor = useSlate();
  const readOnly = useReadOnly();
  const classes = useStyles();
  const isActive = isBlockActive(editor, 'table');

  return (
    <Fragment>
      <TableContainer ref={ref} component={Paper} className={classes.root}>
        <Table>
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
      {!readOnly && isActive && <TableActions />}
    </Fragment>
  );
});

export default CustomTable;
