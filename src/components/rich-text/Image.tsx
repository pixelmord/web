import { forwardRef } from 'react';
import { Element } from 'slate';
import { useFocused, useSelected } from 'slate-react';
import { theme } from '@zoonk/utils';

interface ImageProps {
  attributes: any;
  children: React.ReactNode;
  element: Element;
}

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { attributes, children, element } = props;
  const { src, height, width, align, title } = element as any;
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
        {title && <figcaption>{title}</figcaption>}
      </div>
      {children}
    </div>
  );
});

export default Image;
