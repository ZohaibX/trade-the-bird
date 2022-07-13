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
import Axios from 'axios';

function UpdateAd(props) {
  const [breedName, setBreedName] = React.useState('');
  const [birdName, setBirdName] = React.useState('');
  const [adTitle, setAdTitle] = React.useState('');
  const [adDescription, setAdDescription] = React.useState('');
  const [adPrice, setAdPrice] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [locationDetails, setLocationDetails] = React.useState('');
  const [city, setCity] = React.useState('');
  const [error, setError] = React.useState('');

  const id = atob(props.match.params.id);

  React.useEffect(() => {
    const fetchAdDetails = async () => {
      const { data } = await Axios.get(`${keys.BACKEND}/api/ads/get-ad/${id}`);
      setBreedName(data.breedName);
      setBirdName(data.birdTitle);
      setAdTitle(data.title);
      setAdDescription(data.description);
      setAdPrice(data.price);
      setContact(data.contactNumber);
      setLocationDetails(data.locationDetails);
      setCity(data.city);
    };
    fetchAdDetails();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (
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

    // here, update the picture url in user's data
    let response;

    try {
      await axios.put(`${keys.BACKEND}/api/ads/update-ad/${id}`, {
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

  return (
    <div className="" style={{ width: '100%', margin: '0 auto' }}>
      <h2 className="text-center my-5" style={{ fontFamily: 'Alfa Slab One' }}>
        Update Your AD Sir.
      </h2>

      <Form className="form-update" onSubmit={submit}>
        <div className="ad-title mb-2">
          <Text
            label="Give Your Ad - A Promising Title ... "
            value={adTitle}
            setValue={setAdTitle}
          />
        </div>

        <div className="" id="search-box-post" style={{ marginTop: '10px' }}>
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
          <div className="price" style={{ marginTop: '-20px' }}>
            <Text
              label="Price (PKR) ..."
              value={adPrice}
              setValue={setAdPrice}
              type="Number"
            />{' '}
          </div>
        </div>

        <div className="" id="location-box-post" style={{ marginTop: '20px' }}>
          <div className="contact-number">
            <Text
              label="Contact Number ..."
              value={contact}
              setValue={setContact}
            />
          </div>

          <div className="City">
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
  component: UpdateAd,
};
