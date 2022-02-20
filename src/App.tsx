import React from "react";
import "./App.scss";
import { Banner } from "./components/Banner";
import { Row } from "./components/Row";
import requests from "./requests";
function App() {
  return (
    <div className="app">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTreding} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMoves} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMoves} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentarues" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
