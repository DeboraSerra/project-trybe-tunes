import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <section>
        <BrowserRouter>
          <Switch>
            <Route path="/project-trybe-tunes/profile/edit" component={ ProfileEdit } />
            <Route path="/project-trybe-tunes/profile" component={ Profile } />
            <Route path="/project-trybe-tunes/favorites" component={ Favorites } />
            <Route path="/project-trybe-tunes/album/:id" component={ Album } />
            <Route path="/project-trybe-tunes/search" component={ Search } />
            <Route exact path="/project-trybe-tunes/" component={ Login } />
            <Route path="/project-trybe-tunes/*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
