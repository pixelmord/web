import { useContext } from 'react';
import { useSlate } from 'slate-react';
import { Button, makeStyles } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { GlobalContext } from '@zoonk/utils';
import { addColumn, addRow, deleteColumn, deleteRow } from './tables';

const useStyles = makeStyles((theme) => ({
  root: { margin: theme.spacing(2, 0) },
  actions: { display: 'flex', alignItems: 'center' },
}));

const TableActions = () => {
  const { translate } = useContext(GlobalContext);
  const editor = useSlate();
  const classes = useStyles();

  return (
    <div className={classes.actions}>
      <Button
        color="primary"
        startIcon={<Add aria-label={translate('add')} />}
        onMouseDown={(e) => {
          e.preventDefault();
          addRow(editor);
        }}
      >
        {translate('row')}
      </Button>
      <Button
        color="primary"
        startIcon={<Add aria-label={translate('add')} />}
        onMouseDown={(e) => {
          e.preventDefault();
          addColumn(editor);
        }}
      >
        {translate('column')}
      </Button>
      <Button
        color="secondary"
        startIcon={<Remove aria-label={translate('delete')} />}
        onMouseDown={(e) => {
          e.preventDefault();
          deleteColumn(editor);
        }}
      >
        {translate('column')}
      </Button>
      <Button
        color="secondary"
        startIcon={<Remove aria-label={translate('delete')} />}
        onMouseDown={(e) => {
          e.preventDefault();
          deleteRow(editor);
        }}
      >
        {translate('row')}
      </Button>
    </div>
  );
};

export default TableActions;
