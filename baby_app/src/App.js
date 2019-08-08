import React from 'react';
import NavBar from './components/NavBar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import BabyShower from './components/BabyShower'
import Photos from './components/Photos'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <NavBar />
            <Route exact path='/' component={Home} />
            <Route path='/BabyShower' component={BabyShower} />
            <Route path='/Photos' component={Photos} />
        </div>
    </BrowserRouter>
  );
}

export default App;
