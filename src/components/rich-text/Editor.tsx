import { useCallback, useContext, useMemo, useState } from 'react';
import isHotkey from 'is-hotkey';
import { createEditor, Node } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import { GlobalContext } from '@zoonk/utils';
import Element from './Element';
import Leaf from './Leaf';
import Toolbar from './Toolbar';
import { editorHotkeys, insertLink, toggleMark, withLinks } from './utils';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];

const RTEditor = () => {
  const { translate } = useContext(GlobalContext);
  const [content, setContent] = useState<Node[]>(initialValue);
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(
    () => withLinks(withHistory(withReact(createEditor()))),
    [],
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    Object.entries(editorHotkeys).forEach(([key, value]) => {
      if (isHotkey(key, event as any)) {
        event.preventDefault();
        toggleMark(editor, value as string);
      }
    });

    if (isHotkey('mod+k', event as any)) {
      event.preventDefault();
      insertLink(editor, translate('link_add'));
    }
  };

  return (
    <Slate editor={editor} value={content} onChange={setContent}>
      <Toolbar />
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={handleKeyDown}
        style={{ fontFamily: "'Raleway', sans-serif" }}
      />
    </Slate>
  );
};

export default RTEditor;
