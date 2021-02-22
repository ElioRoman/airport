import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchField from './fligths/component/SearchField';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <Router>
          <Switch>
            <Route path="/:direction?/:fltNo?">
              <SearchField />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
