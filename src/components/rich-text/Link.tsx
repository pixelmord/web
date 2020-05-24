import { Link } from '@material-ui/core';
import { isInternal } from '@zoonk/utils';

interface CustomLinkProps {
  children: React.ReactNode;
  href: string;
}

const CustomLink = ({ children, href }: CustomLinkProps) => {
  return (
    <Link
      href={href}
      target={isInternal(href) ? '_self' : '_blank'}
      rel="noopener noreferrer"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
