import { NextPage } from 'next';
import NextLink from 'next/link';
import { Container, Link } from '@material-ui/core';
import HomeBreadcrumb from '@zoonk/components/HomeBreadcrumb';
import Meta from '@zoonk/components/Meta';

const Test: NextPage = () => {
  return (
    <Container component="main" maxWidth="sm">
      <Meta title="test ssg" />
      <HomeBreadcrumb title="test ssg" />
      <NextLink href="/canary/initialProps" passHref>
        <Link>getInitialProps</Link>
      </NextLink>

      <br />

      <NextLink href="/canary/serverProps" passHref>
        <Link>getServerSideProps</Link>
      </NextLink>
    </Container>
  );
};

export default Test;
