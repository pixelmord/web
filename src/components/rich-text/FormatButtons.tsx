import { useSlate } from 'slate-react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { FormatBold, FormatItalic, FormatUnderlined } from '@material-ui/icons';
import { isMarkActive, toggleMark } from './utils';

const FormatButtons = () => {
  const editor = useSlate();

  const handleFormat = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    format: string,
  ) => {
    event.preventDefault();
    toggleMark(editor, format);
  };

  return (
    <ToggleButtonGroup aria-label="text formatting">
      <ToggleButton
        value="bold"
        aria-label="bold"
        selected={isMarkActive(editor, 'bold')}
        onMouseDown={(e) => handleFormat(e, 'bold')}
      >
        <FormatBold />
      </ToggleButton>
      <ToggleButton
        value="italic"
        aria-label="italic"
        selected={isMarkActive(editor, 'italic')}
        onMouseDown={(e) => handleFormat(e, 'italic')}
      >
        <FormatItalic />
      </ToggleButton>
      <ToggleButton
        value="underline"
        aria-label="underline"
        selected={isMarkActive(editor, 'underline')}
        onMouseDown={(e) => handleFormat(e, 'underline')}
      >
        <FormatUnderlined />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default FormatButtons;
