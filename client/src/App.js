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
// imports the Header component
import Header from "./components/Header";
//imports the Footer component
import Footer from "./components/Footer";
// imports the Home.js
import Home from "./pages/Home";
// imports the react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// imports the logic from the pages directory
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

// establishes connection to back-end server's /graphql endpoint
const httpLink = createHttpLink({
  url: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <div className="container">
        <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/profile"
                element={<Profile />}
              />
              <Route
                path="/thought"
                element={<SingleThought />}
              />
        </Routes>
      </div>
      <Footer />
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
