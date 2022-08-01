import React from "react";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Featured from "../components/Featured";
import Highlighs from "../components/Highlighs";
import Landing from "../components/Landing";

function Home() {
  return (
    <>
      <Landing />
      <Highlighs />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
}

export default Home;
