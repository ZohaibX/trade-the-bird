import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Axios from 'axios';
import { keys } from '../../../config/keys';
import CustomImageList from '../../components/home/image-list';
import BasicTabs from '../../components/home/text-box';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RequireAuth from '../../components/hocs/require-auth';
import MediaCard from '../../components/home/card';

const MyAds = (props) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    const fetchAds = async () => {
      const { data } = await Axios.get(`${keys.BACKEND}/api/ads/get-user-ads`);
      setData(data);
    };
    fetchAds();
  }, []);

  let title;
  if (props.currentUser && props.currentUser.id)
    title = props.currentUser.username;
  else title = 'My Ads';

  console.log(data);

  const head = () => (
    // Replace --- title must be user's title
    <Helmet>
      <title>{`${title}`}</title>
    </Helmet>
  );

  return (
    <div className="container">
      {head()}
      <h1 className="my-5 text-center" style={{ fontFamily: 'Alfa Slab One' }}>
        My Ads
      </h1>

      <div className="d-flex flex-row justify-content-md-start gap-3 flex-wrap ">
        {data.length ? (
          data.map((item) => (
            <MediaCard
              key={item.id}
              imageLink={item.images[0]}
              alt={item.breedName}
              title={item.title}
              birdName={item.birdTitle}
              breedName={item.breedName}
              price={item.price}
              city={item.city}
              link={`/ad-details-${btoa(item.id)}-${btoa(
                item.userId
              )}-details-x`}
            />
          ))
        ) : (
          <h4 className="text-center" style={{ fontFamily: 'Alfa Slab One' }}>
            You haven't posted any ad yet!
          </h4>
        )}
      </div>
    </div>
  );
};

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default {
  component: connect(mapStateToProps)(RequireAuth(MyAds)),
};
