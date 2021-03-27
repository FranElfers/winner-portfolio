import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// react-router-dom no tiene 'Router', eso es de react-router.
import './App.css';
import Menu from './components/Menu';
import GifAPI from './components/Giphy/';
import P5 from './components/P5/';
import Resume from './components/Resume/';
import { ConfigProvider } from './context/config';
import { CSSTransition } from 'react-transition-group';


function App() {
  const [ inProp, setInProp ] = useState(false);
  return (
    <div className="App">
      <div className="App-center">
        <ConfigProvider>
          <Router>
            <Switch>
              <Route path="/gifs/" component={GifAPI} />
              <Route path="/p5js/" component={P5} />
              <Route path="/resume" component={Resume} />
              {/* el path '/' tiene que estar a lo ultimo */}
              <Route path="/" component={Menu} /> 
            </Switch>
          </Router>
        </ConfigProvider>
      </div>
    </div>
  );
}

export default App;