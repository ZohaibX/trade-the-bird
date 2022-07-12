import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Text({ label, value, setValue, type = '' }) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-basic"
          value={value}
          type={type}
          onChange={(e) => setValue(e.currentTarget.value)}
          label={label}
          variant="standard"
        />
      </div>
    </Box>
  );
}
