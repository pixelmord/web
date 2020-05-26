import { forwardRef } from 'react';
import { useFocused, useSelected } from 'slate-react';
import { theme } from '@zoonk/utils';

interface ImageProps {
  attributes: any;
  children: React.ReactNode;
  src?: string;
  height?: string;
  width?: string;
  align?: 'center' | 'left' | 'right';
  title?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { attributes, children, src, height, width, align, title } = props;
  const selected = useSelected();
  const focused = useFocused();
  const float = align === 'left' || align === 'right' ? align : 'none';

  if (!src) return null;

  return (
    <div {...attributes}>
      <div
        contentEditable={false}
        style={{ float, textAlign: align, margin: theme.spacing(0, 1) }}
      >
        <img
          ref={ref}
          src={src}
          title={title}
          alt={title}
          style={{
            maxWidth: width || '100%',
            height: height || 'auto',
            boxShadow: selected && focused ? '0 0 0 3px #B4D5FF' : 'none',
          }}
        />
      </div>
      {children}
    </div>
  );
});

export default Image;
