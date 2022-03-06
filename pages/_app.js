import React from "react";
import '../styles/globals.scss';
import {ApolloProvider} from '@apollo/client';
import client from '../apollo/apollo-client';
import App from "../ui/components/App";

function MyApp({ Component, pageProps }) {
  return(
<ApolloProvider client={client}>
  <App>
    <Component {...pageProps} />
  </App>

  </ApolloProvider>
  );
}

export default MyApp
