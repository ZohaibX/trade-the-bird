import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Axios from 'axios';
import { keys } from '../../../config/keys';

const AdDetails = (props) => {
  const id = props.match.params.adId;
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchAdDetails = async () => {
      const { data } = await Axios.get(`${keys.BACKEND}/api/ads/get-ad/${id}`);
      setData(data);
    };
    fetchAdDetails();
  }, []);

  console.log(data);

  let title;
  if (data) title = data.breedName;
  else title = 'Ad Details';
  const head = () => (
    // Replace --- title must be user's title
    <Helmet>
      <title>{`${title}`}</title>
    </Helmet>
  );

  return (
    <div>
      {head()}
      <h2 className="text-center my-5" style={{ fontFamily: 'Alfa Slab One' }}>
        This is Ad Details Page
      </h2>
    </div>
  );
};

export default {
  component: AdDetails,
};
