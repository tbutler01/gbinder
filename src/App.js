import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';


import './App.css';

import HomePage from './pages/homepage/homepage.component';

const Page = ({ title }) => (
  <div>
    <h1>{title.toUpperCase()} PAGE</h1>
    <Link to='/'>Go HOME</Link>
  </div>
);



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/songs/ballad' component={() => <Page title='ballad' />} />
        <Route path='/songs/swing' component={() => <Page title='swing' />} />
        <Route path='/songs/latin' component={() => <Page title='latin' />} />
        <Route path='/songs/blues' component={() => <Page title='blues' />} />
        <Route path='/songs/funk' component={() => <Page title='funk' />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
