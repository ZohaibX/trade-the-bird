import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Input = styled('input')({
  display: 'none',
});

export default function UploadButton({ files, setFiles }) {
  const onFileChange = (e) => {
    setFiles(e.target.files);
    // console.log('files are: ', e.target.files);
    // console.log('files length is: ', e.target.files.length);
    // if (files) console.log(files[0]);
  };

  return (
    <label htmlFor="contained-button-file">
      <Input
        accept="image/*"
        onChange={onFileChange}
        id="contained-button-file"
        multiple
        type="file"
      />
      <Button
        variant="contained"
        style={{ backgroundColor: '#191970', color: 'white' }}
        component="span"
      >
        Upload Pictures
      </Button>
    </label>
  );
}
