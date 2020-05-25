import { useContext } from 'react';
import { useSlate } from 'slate-react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { FormatBold, FormatItalic, FormatUnderlined } from '@material-ui/icons';
import { GlobalContext } from '@zoonk/utils';
import { isMarkActive, toggleMark } from './marks';

const FormatButtons = () => {
  const { translate } = useContext(GlobalContext);
  const editor = useSlate();

  const handleFormat = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    format: string,
  ) => {
    event.preventDefault();
    toggleMark(editor, format);
  };

  return (
    <ToggleButtonGroup aria-label={translate('formatting_label')}>
      <ToggleButton
        value="bold"
        aria-label={translate('formatting_bold')}
        title={translate('formatting_bold')}
        selected={isMarkActive(editor, 'bold')}
        onMouseDown={(e) => handleFormat(e, 'bold')}
      >
        <FormatBold />
      </ToggleButton>
      <ToggleButton
        value="italic"
        aria-label={translate('formatting_italic')}
        title={translate('formatting_italic')}
        selected={isMarkActive(editor, 'italic')}
        onMouseDown={(e) => handleFormat(e, 'italic')}
      >
        <FormatItalic />
      </ToggleButton>
      <ToggleButton
        value="underline"
        aria-label={translate('formatting_underline')}
        title={translate('formatting_underline')}
        selected={isMarkActive(editor, 'underline')}
        onMouseDown={(e) => handleFormat(e, 'underline')}
      >
        <FormatUnderlined />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default FormatButtons;
