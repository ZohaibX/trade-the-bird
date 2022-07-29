import * as React from 'react';
import { Form } from 'react-bootstrap';
import Select from '../../components/form/Auto-Complete';
import NormalSelect from '../../components/form/Auto-Complete-Normal';
import BirdNameSelect from '../../components/form/bird-name-autocomplete';
import Text from '../../components/form/text-field';
import UploadButton from '../../components/form/file-picker';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import useRequest from '../../hooks/use-request';
import Alert from '@mui/material/Alert';
import { keys } from '../../../config/keys';
import RequireAuth from '../../components/hocs/require-auth';
import { Helmet } from 'react-helmet';

function PostAd() {
  const [breedName, setBreedName] = React.useState('');
  const [birdName, setBirdName] = React.useState('');
  const [adTitle, setAdTitle] = React.useState('');
  const [adDescription, setAdDescription] = React.useState('');
  const [adPrice, setAdPrice] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [locationDetails, setLocationDetails] = React.useState('');
  const [city, setCity] = React.useState('');
  const [files, setFiles] = React.useState([]);
  const [error, setError] = React.useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (
      !files.length ||
      !birdName ||
      !breedName ||
      !adTitle ||
      !adDescription ||
      !adPrice ||
      !contact ||
      !locationDetails ||
      !city
    )
      return alert('fill all the requirements');

    // get url from this route - when all the app is single
    let urls = [];
    for (let i = 0; i < files.length; i++) {
      const { data } = await axios.get(
        `${keys.BACKEND}/api/ads/ad-upload/get-url/`
      );
      urls = [...urls, data];
    }

    // now update picture in that url
    for (let i = 0; i < files.length; i++) {
      const response = await axios.put(urls[i].url, files[i], {
        headers: { 'Content-Type': files[i].type },
      });
    }

    // here, update the picture url in user's data
    let response;

    try {
      response = await axios.post(`${keys.BACKEND}/api/ads/ad-upload/`, {
        images: urls,
        birdName,
        breedName,
        adTitle,
        adDescription,
        adPrice,
        contact,
        locationDetails,
        city,
      });
      window.location = '/';
    } catch (error) {
      if (error.response.data.errors[0])
        setError(error.response.data.errors[0].message.toUpperCase());
      else setError(error.response.data.message);
    }
  };

  //! This function is for SEO
  const head = () => (
    // Replace --- title must be user's title
    <Helmet>
      <title>{`Post AD`}</title>
    </Helmet>
  );

  return (
    <div className="" style={{ width: '100%', margin: '0 auto' }}>
      {head()}
      <h2
        className="text-center my-5"
        style={{
          fontFamily: 'Alfa Slab One',
          borderBottom: '2px solid black',
          paddingBottom: '2px',
          width: '400px',
          margin: '0 auto',
        }}
      >
        Upload an Ad Sir.
      </h2>

      <Form onSubmit={submit} className="form-post">
        <div className="ad-title mb-2">
          <Text
            label="Give Your Ad - A Promising Title ... "
            value={adTitle}
            setValue={setAdTitle}
          />
        </div>

        <div className="" id="search-box-post">
          <BirdNameSelect
            label="Bird Name"
            value={birdName}
            setValue={setBirdName}
          />
          <Select
            label="Bird's Breed Name"
            value={breedName}
            setValue={setBreedName}
            birdName={birdName}
          />
        </div>

        <div className="ad-desc mb-2" style={{ marginTop: '-20px' }}>
          <Text
            label="Description ..."
            value={adDescription}
            setValue={setAdDescription}
          />
        </div>

        <div className="post-flex-1" style={{ marginTop: '20px' }}>
          <div className="price mb-3" style={{ marginTop: '-20px' }}>
            <Text
              label="Price (PKR) ..."
              value={adPrice}
              setValue={setAdPrice}
              type="Number"
            />{' '}
          </div>

          <div className="upload">
            <UploadButton files={files} setFiles={setFiles} />
            <br />
            <Form.Text className="text-muted">
              Please select the only images - which are clearly recognizable.
            </Form.Text>
          </div>
        </div>

        <div className="" id="location-box-post">
          <div className="contact-number">
            <Text
              label="Contact Number ..."
              value={contact}
              setValue={setContact}
            />
          </div>

          <div className="city">
            <NormalSelect label="City" value={city} setValue={setCity} />
          </div>

          <div className="location-details">
            <Text
              label="Location Details ..."
              value={locationDetails}
              setValue={setLocationDetails}
            />
          </div>
        </div>

        <div className="error-alert">
          {error && <Alert severity="error">This is an error — {error}</Alert>}
          <br />
        </div>

        <div className="d-grid gap-2">
          <Button
            type="submit"
            style={{
              backgroundColor: '#191970',
              color: 'white',
              textDecoration: 'none',
              height: '50px',
              fontWeight: 'bold',
            }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </div>
      </Form>

      <br />
    </div>
  );
}

export default {
  component: RequireAuth(PostAd),
  // component: PostAd,
};
