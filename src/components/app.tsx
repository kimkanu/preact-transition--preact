import { Component, h } from 'preact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from '../routes/home';
import Profile from '../routes/profile';
import Header from './header';

if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require('preact/debug');
}

export default class App extends Component {
  public currentUrl?: string;

  public render() {
    return (
      <div id="app">
        <Router>
          <Header />
          <Route
            render={({ location }) => {
              return (
                <TransitionGroup>
                  <CSSTransition
                    timeout={6000}
                    classNames="page"
                    key={location.key}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home as any} />
                      <Route
                        exact
                        path="/profile/"
                        component={(() => <Profile user="me" />) as any}
                      />
                      <Route
                        path="/profile/:user"
                        component={
                          (({ match }: any) => (
                            <Profile user={match.params.user} />
                          )) as any
                        }
                      />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          />
        </Router>
      </div>
    );
  }
}
