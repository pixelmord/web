import { useSlate } from 'slate-react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import {
  BorderHorizontal,
  Code,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatSize,
} from '@material-ui/icons';
import { isBlockActive, toggleBlock } from './utils';

const FormatButtons = () => {
  const editor = useSlate();

  const handleFormat = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    format: string,
  ) => {
    event.preventDefault();
    toggleBlock(editor, format);
  };

  return (
    <ToggleButtonGroup aria-label="block formatting">
      <ToggleButton
        value="h2"
        aria-label="h2"
        selected={isBlockActive(editor, 'h2')}
        onMouseDown={(e) => handleFormat(e, 'h2')}
      >
        <FormatSize />
      </ToggleButton>
      <ToggleButton
        value="blockquote"
        aria-label="blockquote"
        selected={isBlockActive(editor, 'blockquote')}
        onMouseDown={(e) => handleFormat(e, 'blockquote')}
      >
        <FormatQuote />
      </ToggleButton>
      <ToggleButton
        value="ul"
        aria-label="ul"
        selected={isBlockActive(editor, 'ul')}
        onMouseDown={(e) => handleFormat(e, 'ul')}
      >
        <FormatListBulleted />
      </ToggleButton>
      <ToggleButton
        value="ol"
        aria-label="ol"
        selected={isBlockActive(editor, 'ol')}
        onMouseDown={(e) => handleFormat(e, 'ol')}
      >
        <FormatListNumbered />
      </ToggleButton>
      <ToggleButton
        value="code"
        aria-label="code"
        selected={isBlockActive(editor, 'code')}
        onMouseDown={(e) => handleFormat(e, 'code')}
      >
        <Code />
      </ToggleButton>
      <ToggleButton
        value="hr"
        aria-label="hr"
        selected={isBlockActive(editor, 'hr')}
        onMouseDown={(e) => handleFormat(e, 'hr')}
      >
        <BorderHorizontal />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default FormatButtons;
