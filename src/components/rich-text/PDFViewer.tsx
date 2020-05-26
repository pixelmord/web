import { forwardRef } from 'react';

interface PDFProps {
  url: string;
}

const PDF = forwardRef<HTMLDivElement, PDFProps>((props, ref) => {
  const { children, url } = props;
  return (
    <div ref={ref} contentEditable={false}>
      <iframe src={url} width="100%" height="700px" title="PDF">
        {children}
      </iframe>
    </div>
  );
});

export default PDF;
