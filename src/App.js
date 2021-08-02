import './App.css';
import './styles/app.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Homepage = lazy(() => import('./pages/Home'));
const Workpage = lazy(() => import('./pages/work/OurWork'));

function App() {
  return (
    <div className="">
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={'/'} component={Homepage} exact />
            <Route path={'/work'} component={Workpage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
