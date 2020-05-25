import { useContext } from 'react';
import { useSlate } from 'slate-react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import {
  BorderAll,
  BorderHorizontal,
  Code,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  FormatSize,
  Link,
  LinkOff,
} from '@material-ui/icons';
import { GlobalContext } from '@zoonk/utils';
import { isBlockActive, toggleBlock } from './blocks';
import { insertLink } from './links';
import { insertTable } from './tables';

const FormatButtons = () => {
  const { translate } = useContext(GlobalContext);
  const editor = useSlate();
  const isLink = isBlockActive(editor, 'link');

  const handleFormat = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    format: string,
  ) => {
    event.preventDefault();
    toggleBlock(editor, format);
  };

  const handleLink = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    insertLink(editor, translate('link_add'));
  };

  return (
    <ToggleButtonGroup aria-label={translate('formatting_blocks')}>
      <ToggleButton
        value="h2"
        aria-label={translate('formatting_header')}
        title={translate('formatting_header')}
        selected={isBlockActive(editor, 'h2')}
        onMouseDown={(e) => handleFormat(e, 'h2')}
      >
        <FormatSize />
      </ToggleButton>
      <ToggleButton
        value="link"
        aria-label={translate('formatting_link')}
        title={translate('formatting_link')}
        selected={isLink}
        onMouseDown={handleLink}
      >
        {isLink ? <LinkOff /> : <Link />}
      </ToggleButton>
      <ToggleButton
        value="blockquote"
        aria-label={translate('formatting_quote')}
        title={translate('formatting_quote')}
        selected={isBlockActive(editor, 'blockquote')}
        onMouseDown={(e) => handleFormat(e, 'blockquote')}
      >
        <FormatQuote />
      </ToggleButton>
      <ToggleButton
        value="ul"
        aria-label={translate('formatting_ul')}
        title={translate('formatting_ul')}
        selected={isBlockActive(editor, 'ul')}
        onMouseDown={(e) => handleFormat(e, 'ul')}
      >
        <FormatListBulleted />
      </ToggleButton>
      <ToggleButton
        value="ol"
        aria-label={translate('formatting_ol')}
        title={translate('formatting_ol')}
        selected={isBlockActive(editor, 'ol')}
        onMouseDown={(e) => handleFormat(e, 'ol')}
      >
        <FormatListNumbered />
      </ToggleButton>
      <ToggleButton
        value="code"
        aria-label={translate('formatting_code_multiline')}
        title={translate('formatting_code_multiline')}
        selected={isBlockActive(editor, 'code')}
        onMouseDown={(e) => handleFormat(e, 'code')}
      >
        <Code />
      </ToggleButton>
      <ToggleButton
        value="hr"
        aria-label={translate('formatting_hr')}
        title={translate('formatting_hr')}
        selected={isBlockActive(editor, 'hr')}
        onMouseDown={(e) => handleFormat(e, 'hr')}
      >
        <BorderHorizontal />
      </ToggleButton>
      <ToggleButton
        value="table"
        aria-label={translate('formatting_table')}
        title={translate('formatting_table')}
        selected={isBlockActive(editor, 'table')}
        onMouseDown={(e) => {
          e.preventDefault();
          insertTable(editor);
        }}
      >
        <BorderAll />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default FormatButtons;
