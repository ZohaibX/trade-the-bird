import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Passport from '../components/passport/auth';
import Axios from 'axios';
import useRequest from '../hooks/use-request';
import MediaCard from '../components/home/card';
import BirdNameSelect from '../components/form/bird-name-autocomplete';
import Select from '../components/form/Auto-Complete';
import Button from '@mui/material/Button';
import { fetchAllAds } from '../Store/actions/index';
import { keys } from '../../config/keys';

const Home = (props) => {
  const [breedName, setBreedName] = React.useState('');
  const [birdName, setBirdName] = React.useState('');

  // {props got currentUser property from redux }
  React.useEffect(() => {
    props.fetchAllAds();
  }, []);

  //! This function is for SEO
  const head = () => (
    // Replace --- title must be user's title
    <Helmet>
      <title>{`Home`}</title>
    </Helmet>
  );

  let searchedBirds = [];
  if (breedName) {
    for (let i = 0; i < props.allAds.length; i++) {
      if (props.allAds[i].breedName.includes(breedName))
        searchedBirds.push(props.allAds[i]);
    }
  }
  if (!searchedBirds.length) searchedBirds = props.allAds;

  console.log(searchedBirds);

  return (
    <div className="mx-5 my-5">
      {head()}
      {/* I can place head() function anywhere, Helmet will automatically put it into head tag */}

      <div
        className="d-flex flex-row justify-content-start gap-5 my-4"
        style={{ width: '85%' }}
      >
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

      {/* // Replace */}
      <div className="d-flex flex-row justify-content-md-start gap-3 flex-wrap ">
        {searchedBirds.map((item) => (
          <MediaCard
            imageLink={item.images[0]}
            alt={item.breedName}
            title={item.title}
            birdName={item.birdTitle}
            breedName={item.breedName}
            price={item.price}
            city={item.city}
            link={`/${item.id}`}
          />
        ))}
      </div>
    </div>
  );
};

function mapStateToProps({ currentUser, allAds }) {
  return { currentUser, allAds };
}

export default {
  component: connect(mapStateToProps, { fetchAllAds })(Home), // this styling is for Routes file specially
  // component: connect(mapStateToProps, { fetchUsers })(Home), // this styling is for Routes file specially
  // 2nd property - like {fetchusers} will create fetchUser function in props.
  // and we'll do props.fetchUsers -- and its data will be available in props.
  // but we will have to map that data into the state -- i.e. in maptoState function above
};
