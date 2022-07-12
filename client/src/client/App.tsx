import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header';
import { fetchCurrentUser } from './Store/actions';
import axios from 'axios'
import { connect } from 'react-redux';

// any route, that is matched by matchRoutes fn, will be passed to this App
// This App component will be directly connected to every route and to the components, we use here - like header
const App = (props) => {
  
  React.useEffect(() => {
    props.fetchCurrentUser()
  }, []);

  console.log("props from app -- ", props.currentUser);
  
  
  return (
    <div >
      <Header currentUser={props.currentUser} />
      <div className="body"></div>
      {renderRoutes(props.route.routes)}
    </div>
  );
};

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default {
  component: connect(mapStateToProps, { fetchCurrentUser })(App)
  // component: App,
  // loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
//? here, we have loaded current user data into the store
//? this component is directly connected to every route and to the components, we use here - like header
//? we can use this currentUser data there without dispatching currentUser action
