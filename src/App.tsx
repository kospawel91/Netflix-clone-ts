import React from 'react';
import './App.scss';
import { Row } from './components/Row';
import requests from './requests';
function App() {
  return (
    <div className="App">
        <Row title="Trending" fetchUrl={requests.fetchNetflixOriginals}/>
    </div>
  );
}

export default App;
