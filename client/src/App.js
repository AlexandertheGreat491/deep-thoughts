import React from "react";
// ApolloProvider a React component used to provide data to all other components
// ApolloClient a constructor function helps initialize connection to the GraphQL API server
// InMemoryCache enables the Apollo Client instance to cache API response data to perform requests more efficietly
// createHttpLink controls how the Apollo Client makes a request.
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";

function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
