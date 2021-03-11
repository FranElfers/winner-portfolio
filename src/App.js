import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// react-router-dom no tiene 'Router', eso es de react-router.
import './App.css';
import Menu from './components/Menu';
import GifAPI from './components/GifAPI';
import P5 from './components/P5';

function App() {  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/gifs/" component={GifAPI} />
          <Route path="/p5js/" component={P5} />
          <Route path="/" component={Menu} /> 
          {/* el path '/' tiene que estar a lo ultimo */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;