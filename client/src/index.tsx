
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import App from './App';
import apolloClient from './app/graphql';
import { store } from './app/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
         <BrowserRouter>
              <App />
         </BrowserRouter>
       </ApolloProvider>
       </Provider>
  </React.StrictMode>
);

