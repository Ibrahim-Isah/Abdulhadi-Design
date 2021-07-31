import './App.css';
import './styles/app.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Homepage = lazy(() => import('./pages/Home'));

function App() {
  return (
    <div className="">
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={'/'} component={Homepage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
