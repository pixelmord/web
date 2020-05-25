/* eslint-disable no-param-reassign */
import { Editor, Range, Transforms } from 'slate';
import { ReactEditor } from 'slate-react';

export const editorHotkeys = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
};

const listTypes = ['ol', 'ul'];
const nestedBlocks = [...listTypes, 'code', 'blockquote'];

export const isBlockActive = (editor: Editor, format: string): boolean => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === format,
  });

  return Boolean(match);
};

export const isMarkActive = (editor: Editor, format: string): boolean => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const toggleBlock = (editor: Editor, format: string) => {
  const isActive = isBlockActive(editor, format);
  const isList = listTypes.includes(format);
  const isBlock = nestedBlocks.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => nestedBlocks.includes(n.type as string),
    split: true,
  });

  Transforms.setNodes(editor, {
    // eslint-disable-next-line no-nested-ternary
    type: isActive || isBlock ? 'paragraph' : isList ? 'li' : format,
  });

  if (!isActive && (isList || isBlock)) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

export const toggleMark = (editor: Editor, format: string): void => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export const unwrapLink = (editor: Editor) => {
  Transforms.unwrapNodes(editor, { match: (n) => n.type === 'link' });
};

export const insertLink = (editor: Editor, title: string) => {
  const { selection } = editor;

  if (!selection) return;

  if (isBlockActive(editor, 'link')) {
    unwrapLink(editor);
    return;
  }

  const url = window.prompt(title);
  if (!url) return;

  const isCollapsed = selection && Range.isCollapsed(selection);
  const link = {
    type: 'link',
    url,
    children: isCollapsed ? [{ text: url }] : [],
  };

  if (isCollapsed) {
    Transforms.insertNodes(editor, link);
  } else {
    Transforms.wrapNodes(editor, link, { split: true });
    Transforms.collapse(editor, { edge: 'end' });
  }
};

export const withLinks = (editor: ReactEditor) => {
  const { isInline } = editor;

  editor.isInline = (element) => {
    return element.type === 'link' ? true : isInline(element);
  };

  return editor;
};
