import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// react-router-dom no tiene 'Router', eso es de react-router.
import './App.css';
import Menu from './components/Menu';
import GifAPI from './components/GifAPI';

function App() {  
  return (
    <div className="App">
      <section className="App-content">
        <Router>
          <Switch>
            <Route path="/gifs/" component={GifAPI} />
            <Route path="/" component={Menu} /> 
            {/* el path '/' tiene que estar a lo ultimo */}
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default App;