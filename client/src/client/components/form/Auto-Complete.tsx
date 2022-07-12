import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {
  parrotBreeds,
  pigeonBreeds,
  swanBreeds,
  duckBreeds,
} from '../../pages/ads/data';

export default function Select({ label, value, setValue, birdName }) {
  const options = pigeonBreeds.concat(swanBreeds, duckBreeds, parrotBreeds);
  return (
    <div>
      <Autocomplete
        style={{ marginTop: '6px' }}
        options={
          (birdName === 'Parrot' && parrotBreeds) ||
          (birdName === 'Swan' && swanBreeds) ||
          (birdName === 'Ducks' && duckBreeds) ||
          (birdName === 'Pigeon' && pigeonBreeds) ||
          options
        }
        id="disable-close-on-select"
        sx={{ width: 300 }}
        value={value}
        onChange={(event, newInputValue) => setValue(newInputValue)}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="standard" />
        )}
      />

      <br />
    </div>
  );
}

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const option = [
//   'The Shawshank Redemption',
//   'The Godfather',
//   'The Godfather: Part II',
//   ,
// ];
