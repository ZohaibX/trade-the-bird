//! This page is special, bcoz we have applied routes redirection using HOC

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';
import useRequest from '../../hooks/use-request';
import googleIcon from '../../images/google-icon.svg';
import fbIcon from '../../images/facebook-icon.svg';
import { keys } from '../../../config/keys';

const { Label, Text } = Form;

const SignUp = () => {
  const [username, setUsername] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');

  // Replace
  const { doRequest } = useRequest(
    `${keys.BACKEND}/api/users/signUp`,
    { username, email, password },
    'post'
  );

  useEffect(() => {
    console.log('Welcome to Sign Up Page');
  }, []);

  //? This function is for SEO
  const head = () => (
    <Helmet>
      <title>{`Trade - Register`}</title>
    </Helmet>
  );

  const submit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password)
      return alert('Please Fill in all the Required Fields First!');

    // Replace
    if (
      email.toLowerCase() !== 'zohaibbutt045@gmail.com' &&
      email.toLowerCase() !== 'tayyabnaseer76@gmail.com'
    ) {
      if (!username.includes('@') && !username.includes('_'))
        return setUsernameError('Please fulfil Username Requirements!');
    }
    let response;
    response = await doRequest();

    if (response.error) setError(response.error);
    else window.location = '/';
  };

  return (
    <div>
      {head()}
      {/* I can place head() function anywhere, Helmet will automatically put it into head tag */}
      <h2 className="text-center my-5" style={{ fontFamily: 'Alfa Slab One' }}>
        Register Sir.
      </h2>
      <Form onSubmit={submit} className="form-sign">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => {
              if (
                e.currentTarget.value.includes('@') ||
                e.currentTarget.value.includes('_')
              )
                setUsernameError('');
              setUsername(e.currentTarget.value);
            }}
            placeholder="Your Preferred Username..."
          />
          <Form.Text className="text-muted">
            Your Username must include special character i.e. "_" or "@".
          </Form.Text>
        </Form.Group>
        <Form.Group className="">
          {usernameError && (
            <div
              style={{
                marginTop: '20px',
                fontWeight: 'bolder',
                color: 'black',
                fontFamily: 'cursive',
              }}
              className="alert alert-primary"
            >
              {usernameError}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Your Email..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="A Good Password Please..."
          />
        </Form.Group>

        <br />

        <div className="d-grid gap-2">
          <Button
            type="submit"
            className="form-text-button"
            id="form-sign-in-button"
            style={{
              backgroundColor: '#191970',
              color: 'white',
              textDecoration: 'none',
              height: '50px',
              fontWeight: 'bold',
            }}
            size="lg"
          >
            Register
          </Button>
        </div>

        <Form.Group className="mb-3">
          {error && (
            <div
              style={{
                marginTop: '20px',
                fontWeight: 'bolder',
                color: 'black',
                fontFamily: 'cursive',
              }}
              className="alert alert-primary"
            >
              {error}
            </div>
          )}
        </Form.Group>

        <div className="d-flex flex-row justify-content-between">
          {/* // Replace */}
          <a
            href={`${keys.BACKEND}/api/auth/google`}
            className="google-icon d-flex flex-row"
            style={{
              width: '48%',
              borderRadius: '3px',
              textDecoration: 'none',
              margin: '0',
              height: '45px',
              backgroundColor: '#191970',
            }}
          >
            <img
              src={googleIcon}
              style={{ height: '35px', marginLeft: '10px', marginTop: '3px' }}
              alt=""
            />
            <h6
              style={{
                marginLeft: '10px',
                marginTop: '11px',
                fontWeight: 'bold',
                color: 'white',
              }}
              className="form-text-button"
            >
              Google SignUp
            </h6>
          </a>

          {/* Replace */}
          <a
            href={`${keys.BACKEND}/api/auth/facebook`}
            className="facebook-icon d-flex flex-row"
            style={{
              width: '50%',
              borderRadius: '3px',
              textDecoration: 'none',
              height: '45px',
              backgroundColor: '#191970',
            }}
          >
            <img
              src={fbIcon}
              style={{ height: '35px', marginLeft: '10px', marginTop: '3px' }}
              alt=""
            />
            <h6
              style={{
                marginLeft: '10px',
                marginTop: '11px',
                fontWeight: 'bold',
                color: 'white',
              }}
              className="form-text-button"
            >
              Facebook SignUp
            </h6>
          </a>
        </div>
      </Form>
    </div>
  );
};

export default {
  component: SignUp,
};
