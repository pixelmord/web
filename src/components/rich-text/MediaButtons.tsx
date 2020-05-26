import { Fragment, useContext, useRef, useState } from 'react';
import { useSlate } from 'slate-react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Image, Link, LinkOff } from '@material-ui/icons';
import { SnackbarAction } from '@zoonk/models';
import { upload } from '@zoonk/services';
import { firebaseError, GlobalContext, maxFileSize } from '@zoonk/utils';
import { isBlockActive } from './blocks';
import { insertImage } from './images';
import { insertLink } from './links';
import Snackbar from '../Snackbar';

const MediaButtons = () => {
  const { translate } = useContext(GlobalContext);
  const [snackbar, setSnackbar] = useState<SnackbarAction | null>(null);
  const uploadRef = useRef<HTMLInputElement | null>(null);
  const editor = useSlate();
  const isLink = isBlockActive(editor, 'link');

  const handleLink = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    insertLink(editor, translate('link_add'));
  };

  const uploadPhoto = (files: FileList | null) => {
    if (!files) {
      return;
    }

    const file = files[0];

    if (file.size > maxFileSize) {
      setSnackbar({ msg: translate('file_too_big'), type: 'error' });
      return;
    }

    setSnackbar({ msg: translate('uploading'), type: 'progress' });

    upload(file, 'posts')
      .then((photoURL) => {
        insertImage(editor, photoURL);
        setSnackbar({ msg: translate('saved'), type: 'success' });
      })
      .catch((e) => setSnackbar(firebaseError(e, 'photo_upload')));
  };

  return (
    <Fragment>
      <ToggleButtonGroup aria-label={translate('formatting_blocks')}>
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
          value="image"
          aria-label={translate('formatting_image')}
          title={translate('formatting_image')}
          selected={isBlockActive(editor, 'image')}
          onMouseDown={() => uploadRef.current?.click()}
        >
          <Image />
        </ToggleButton>
      </ToggleButtonGroup>
      <input
        ref={uploadRef}
        style={{ display: 'none' }}
        accept="image/*"
        id="insert-image"
        type="file"
        onChange={(e) => uploadPhoto(e.target.files)}
      />
      <Snackbar action={snackbar} />
    </Fragment>
  );
};

export default MediaButtons;
