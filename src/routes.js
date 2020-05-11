import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Forms from './pages/Forms';
import NewQuest from './pages/NewQuest';
import Statistical from './pages/Statistical';

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/form/new" component={NewQuest} />
        <Route path="/statistics" component={Statistical} />
        <Route path="/forms" component={Forms} />
      </Switch>
    </BrowserRouter>
  )
}