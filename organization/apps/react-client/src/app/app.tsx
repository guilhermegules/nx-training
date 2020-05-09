import React, { useState, useEffect } from 'react';

import './app.css';

import { ReactComponent as Logo } from './logo.svg';

import { Route, Link } from 'react-router-dom';
import { PageTitle } from "@organization/ui-header";
import { ApiResponse, API_URL } from "@organization/api-interface";

export const App = () => {
  
  const [apiResponse, setApiResponse] = useState<ApiResponse>({message: "loading"});

  useEffect(() => { 
    fetch(API_URL).then(r => r.json()).then(setApiResponse);
  }, []);

  return (
    <div className="app">
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to react-client!</h1>
        <PageTitle />
      </header>
      <main>
      </main>
        <p>{apiResponse.message}</p>
      <hr />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
    </div>
  );
};

export default App;
