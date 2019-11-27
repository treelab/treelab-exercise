import { ApolloProvider } from '@apollo/react-hooks';
import App from 'next/app';
import { withRouter } from 'next/router';
import React from 'react';

import withApollo from '../lib/apollo';

class MyApp extends App<any> {
  public render() {
    const { Component, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Component />
      </ApolloProvider>
    );
  }
}

// @ts-ignore
export default withRouter(withApollo(MyApp));
