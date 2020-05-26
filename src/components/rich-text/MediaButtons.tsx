import { Fragment, useContext, useRef, useState } from 'react';
import { useSlate } from 'slate-react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import {
  Image,
  Link,
  LinkOff,
  OndemandVideo,
  PictureAsPdf,
} from '@material-ui/icons';
import { SnackbarAction } from '@zoonk/models';
import { upload } from '@zoonk/services';
import { firebaseError, GlobalContext, maxFileSize } from '@zoonk/utils';
import { isBlockActive } from './blocks';
import { insertImage } from './images';
import { insertLink } from './links';
import { insertPDF, removePDF } from './pdf';
import { insertVideo, removeVideo } from './videos';
import Snackbar from '../Snackbar';

const MediaButtons = () => {
  const { translate } = useContext(GlobalContext);
  const [snackbar, setSnackbar] = useState<SnackbarAction | null>(null);
  const uploadRef = useRef<HTMLInputElement | null>(null);
  const editor = useSlate();
  const isLink = isBlockActive(editor, 'link');
  const isPDF = isBlockActive(editor, 'pdf');
  const isVideo = isBlockActive(editor, 'video');

  const handleLink = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    insertLink(editor, translate('link_add'));
  };

  const handleVideo = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (isVideo) {
      removeVideo(editor);
      return;
    }

    const url = window.prompt(translate('video_link'));
    if (!url) return;
    insertVideo(editor, url);
  };

  const handlePDF = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (isVideo) {
      removePDF(editor);
      return;
    }

    const url = window.prompt(translate('pdf_link'));
    if (!url) return;
    insertPDF(editor, url);
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
        <ToggleButton
          value="video"
          aria-label={translate('video')}
          title={translate('video')}
          selected={isVideo}
          onMouseDown={handleVideo}
        >
          <OndemandVideo />
        </ToggleButton>
        <ToggleButton
          value="pdf"
          aria-label={translate('formatting_pdf')}
          title={translate('formatting_pdf')}
          selected={isPDF}
          onMouseDown={handlePDF}
        >
          <PictureAsPdf />
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
