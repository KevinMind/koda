import React from 'react';
import PropTypes from 'prop-types';
import Amplify from 'aws-amplify';

import awsExports from '../aws-exports';

Amplify.configure(awsExports);

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
