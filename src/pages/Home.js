import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import requests from "../requests";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Navbar />

      <Banner />

      <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Originals" fetchUrl={requests.fetchOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentries} />
    </div>
  );
}

export default HomeScreen;
