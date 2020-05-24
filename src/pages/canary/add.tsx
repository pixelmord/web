import { useContext } from 'react';
import { NextPage } from 'next';
import { Container } from '@material-ui/core';
import Meta from '@zoonk/components/Meta';
import Editor from '@zoonk/components/rich-text/Editor';
import { GlobalContext } from '@zoonk/utils';

const PostAddPage: NextPage = () => {
  const { translate } = useContext(GlobalContext);

  return (
    <Container component="main">
      <Meta title={translate('post_add')} noIndex />
      <Editor />
    </Container>
  );
};

export default PostAddPage;
