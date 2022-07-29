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

  let title;
  if (props.currentUser && props.currentUser.username)
    title = props.currentUser.username;
  else title = 'Home';

  //! This function is for SEO
  const head = () => (
    // Replace --- title must be user's title
    <Helmet>
      <title>{`${title}`}</title>
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

  return (
    <div className="my-5" id="home-page">
      {head()}
      {/* I can place head() function anywhere, Helmet will automatically put it into head tag */}

      <div className="my-4" style={{ width: '85%' }} id="search-box">
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
      <div
        className="d-flex flex-row justify-content-md-start gap-3 flex-wrap"
        id="cards"
      >
        {searchedBirds.map((item) => (
          <MediaCard
            key={item.id}
            imageLink={item.images[0]}
            alt={item.breedName}
            title={item.title}
            birdName={item.birdTitle}
            breedName={item.breedName}
            price={item.price}
            city={item.city}
            link={`/ad-details-${btoa(item.id)}-${btoa(item.userId)}-details-x`}
          />
        ))}
        {/* <MediaCard
          key={'test'}
          imageLink={
            'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
          }
          alt={'test'}
          title={'test'}
          birdName={'test'}
          breedName={'test'}
          price={'test'}
          city={'test'}
          link={'/ad-details-123-123-details-x'}
        /> */}
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
