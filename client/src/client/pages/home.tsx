import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Passport from '../components/passport/auth';
import Axios from 'axios';
import useRequest from '../hooks/use-request';


const Home = (props) => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      // Replace
      let {data} = await Axios.get(`http://localhost:5000/api/users/currentUser` , 
      { withCredentials: true });
      setData(data)
      return data
    }
    
    fetchData();
    
  }, [] )

  console.log(data);
  
  //! This function is for SEO
  const head = () => (
    // Replace --- title must be user's title
    <Helmet>
      <title>{`Home`}</title>
    </Helmet>
  );

  const fetchFakeAPIOnClick = () => {
    props.fetchUsers();
  };
  const showFakeAPIOnClick = () => {
    if (props.users.data.length) {
      return props.users.data.map((item) => (
        <ul key={item.id}>
          <li>Name is: {item.name}</li>
        </ul>
      ));
    }
    return null;
  };

  return (
    <div>
      {head()}
      {/* I can place head() function anywhere, Helmet will automatically put it into head tag */}
      <h1>Im a Home Component </h1>
      <button>
        Press Me - !
      </button>
      <br />
      <Link to='/users'>
        <button>Get me to Users</button>
      </Link>
      <br />
      <br />
      <button>fetch data </button>
      <br />
      {showFakeAPIOnClick()}

      <br /><br /><br />
      <Passport/>

      <div className="">
        <h1>Hello World</h1>
      </div>
    </div>
  );
};

function mapStateToProps({ users }) {
  return { users };
}

export default {
  component: connect(mapStateToProps, {  })(Home), // this styling is for Routes file specially
  // component: connect(mapStateToProps, { fetchUsers })(Home), // this styling is for Routes file specially
};
