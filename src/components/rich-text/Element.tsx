import { Element } from 'slate';
import Blockquote from './Blockquote';
import Divider from './Divider';
import Heading from './Heading';
import Link from './Link';
import List from './List';
import Text from './Text';

interface CustomElementProps {
  attributes: any;
  children: React.ReactNode;
  element: Element;
}

const CustomElement = (props: CustomElementProps) => {
  const { attributes, children, element } = props;
  switch (element.type) {
    case 'blockquote':
      return <Blockquote {...attributes}>{children}</Blockquote>;
    case 'h2':
      return <Heading {...attributes}>{children}</Heading>;
    case 'ul':
      return <ul {...attributes}>{children}</ul>;
    case 'li':
      return <List {...attributes}>{children}</List>;
    case 'ol':
      return <ol {...attributes}>{children}</ol>;
    case 'code':
      return <pre {...attributes}>{children}</pre>;
    case 'hr':
      return <Divider {...attributes} />;
    case 'link':
      return (
        <Link {...attributes} href={element.url}>
          {children}
        </Link>
      );
    default:
      return <Text {...attributes}>{children}</Text>;
  }
};

export default CustomElement;
