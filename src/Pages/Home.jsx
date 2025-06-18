import React, { useEffect, useContext } from 'react';
import Hero from "../Components/Hero2";
import About from "../Pages/About";
import Location from "./Location";
import TrackRequest from "./TrackRequest";
import Captain from './Captain';
import Officials from './Officials';

function Home() {
  return (
    <main>
      <section ><Hero /></section>
      <section id="captain" ><Captain /></section>
      <section ><Officials /></section>
      <section ><Location /></section>
    </main>
  );
}

export default Home;
