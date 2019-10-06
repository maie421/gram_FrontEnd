import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { ApolloProvider } from 'react-apollo-hooks';
import client from './Apollo/Client';

ReactDOM.render(
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
     document.getElementById('root')
);

