import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  const [value, setValue] = React.useState('');

  console.log(value);

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        value={value}
        onChange={(event, newInputValue) => setValue(newInputValue)}
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Breed" />}
      />

      <br />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Godfather: Part II',
  ,
];
