import { useContext } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import {
  FormatAlignCenter,
  FormatAlignLeft,
  FormatAlignRight,
} from '@material-ui/icons';
import { GlobalContext } from '@zoonk/utils';
import { AlignOption } from './types';

interface AlignToolbarProps {
  align: AlignOption;
  onChange: (align: AlignOption) => void;
}

const AlignToolbar = ({ align, onChange }: AlignToolbarProps) => {
  const { translate } = useContext(GlobalContext);

  return (
    <ToggleButtonGroup
      exclusive
      value={align}
      onChange={(_, value) => onChange(value)}
      aria-label={translate('align')}
    >
      <ToggleButton
        value="left"
        aria-label={translate('left')}
        title={translate('left')}
      >
        <FormatAlignLeft />
      </ToggleButton>
      <ToggleButton
        value="center"
        aria-label={translate('center')}
        title={translate('center')}
      >
        <FormatAlignCenter />
      </ToggleButton>
      <ToggleButton
        value="right"
        aria-label={translate('right')}
        title={translate('right')}
      >
        <FormatAlignRight />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default AlignToolbar;
