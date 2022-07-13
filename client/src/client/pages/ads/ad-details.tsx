import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Axios from 'axios';
import { keys } from '../../../config/keys';
import CustomImageList from '../../components/home/image-list';
import BasicTabs from '../../components/home/text-box';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdDetails = (props) => {
  const id = atob(props.match.params.id);
  const userId = atob(props.match.params.userId);
  console.log(atob(props.match.params.id)); //  decoding encoded route

  const [data, setData] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    const fetchAdDetails = async () => {
      const { data } = await Axios.get(`${keys.BACKEND}/api/ads/get-ad/${id}`);
      const userData = await Axios.get(
        `${keys.BACKEND}/api/users/get-user-details/${data.userId}`
      );
      setData(data);
      setUser(userData.data);
    };
    fetchAdDetails();
  }, []);

  let title;
  if (data.id) title = data.breedName;
  else title = 'Ad Details';

  const head = () => (
    // Replace --- title must be user's title
    <Helmet>
      <title>{`${title}`}</title>
    </Helmet>
  );

  const deleteAd = async () => {
    try {
      await Axios.delete(`${keys.BACKEND}/api/ads/delete-ad/${data.id}`);
      console.log(data);

      window.location = '/';
    } catch (error) {
      if (error.response.data.errors[0])
        setError(error.response.data.errors[0].message.toUpperCase());
      else setError(error.response.data.message);
    }
  };

  // console.log(props.currentUser.id, data.userId);

  return (
    <div className="container">
      {head()}
      {data.id ? (
        <h2
          className="text-center mt-5"
          style={{ fontFamily: 'Alfa Slab One' }}
        >
          {data.birdTitle} -- {data.breedName}
        </h2>
      ) : (
        <h2
          className="text-center my-5"
          style={{ fontFamily: 'Alfa Slab One' }}
        >
          Ad Details
        </h2>
      )}

      {data.id && (
        <p className="text-center " style={{ fontFamily: 'Alfa Slab One' }}>
          {data.title}
        </p>
      )}

      {data.id && (
        <p className="text-center mb-5" style={{}}>
          PKR {data.price}
        </p>
      )}

      <div className=" gap-5 ad-details-box my-5" style={{ height: '50%' }}>
        <CustomImageList imageUrls={data.images} />
        <BasicTabs
          description={data.description}
          contactNumber={data.contactNumber}
          city={data.city}
          locationDetails={data.locationDetails}
          username={user.username}
          email={user.email}
          price={data.price}
        />
      </div>

      <br />
      <br />
      <br />

      <div></div>
      {props.currentUser && props.currentUser.id === data.userId ? (
        <div className="my-4" style={{ height: '200px' }}>
          <Link to={`/update-ad-details-${btoa(data.id)}-details-x`}>
            <Button
              style={{
                backgroundColor: '#191970',
                color: 'white',
                textDecoration: 'none',
                height: '50px',
                width: '100%',
                fontWeight: 'bold',
              }}
              size="lg"
            >
              Update
            </Button>
          </Link>

          {/* <br /> */}
          <br />

          <Button
            type="submit"
            className="my-2"
            onClick={deleteAd}
            style={{
              backgroundColor: '#b71c1c',
              color: 'white',
              textDecoration: 'none',
              height: '50px',
              width: '100%',
              fontWeight: 'bold',
            }}
            size="lg"
          >
            Delete
          </Button>
        </div>
      ) : null}

      {props.currentUser &&
      props.currentUser.id !== data.userId &&
      props.currentUser.role === 'Admin' ? (
        <div className="my-4" style={{ height: '200px' }}>
          <Link to={`/update-ad-details-${btoa(data.id)}-details-x`}>
            <Button
              style={{
                backgroundColor: '#191970',
                color: 'white',
                textDecoration: 'none',
                height: '50px',
                width: '100%',
                fontWeight: 'bold',
              }}
              size="lg"
            >
              Update
            </Button>
          </Link>

          {/* <br /> */}
          <br />

          <Button
            type="submit"
            className="my-2"
            onClick={deleteAd}
            style={{
              backgroundColor: '#b71c1c',
              color: 'white',
              textDecoration: 'none',
              height: '50px',
              width: '100%',
              fontWeight: 'bold',
            }}
            size="lg"
          >
            Delete
          </Button>
        </div>
      ) : null}
    </div>
  );
};

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default {
  component: connect(mapStateToProps)(AdDetails),
};
