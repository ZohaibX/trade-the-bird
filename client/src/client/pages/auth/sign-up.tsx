//! This page is special, bcoz we have applied routes redirection using HOC

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Form, Input, Button, Checkbox } from 'antd';

const SignUp = () => {
  useEffect(() => {
    console.log("Welcome to Sign Up Page")
  }, []);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  //? This function is for SEO
  const head = () => (
    <Helmet>
      <title>{`Trade - Register`}</title>
      {/* // this is how we will make our title dynamic */}
      <meta property='og:title' content='Admins List'></meta>
      {/* // this title is for SEO -- to identify this page title  */}
      {/* // we normally have to add 4 required meta tags and we can add more optional meta tags for SEO */}
      {/* //? https://ogp.me/ */}
    </Helmet>
  );

  return (
    <div>
      {head()}
      {/* I can place head() function anywhere, Helmet will automatically put it into head tag */}
      <h2 className="text-center my-5" style={{fontFamily: "lobster"}}>Sign Up Here.</h2>
    </div>
  );
};

export default {
  component: SignUp,
};
