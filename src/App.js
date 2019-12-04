import React, { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <p> <Link to="/">Al's Advent of Code </Link> </p>
        </header>

        <Switch>
          <Route path="/day/:dayNumber">
            <DayWrapper />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div>{[...Array(24).keys()].map((day) => <p key={day}><Link to={`/day/${day + 1}`}>Day {day + 1}</Link></p>)}</div>;
}

function DayWrapper() {
  let { dayNumber } = useParams();
  let day;
  try {
    day = require(`../day${dayNumber}`);
  } catch (e) {
    
  }
  return (
    <div className="day-wrapper">
      {day ? (<h2>Day: {dayNumber} ({day.name})</h2>) : (<h2>Day {dayNumber} not implemented yet</h2>)}
      {day && <Day day={day} />}
    </div>
  )
}

function Day({day}) {
  let [data, setData] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(day.data);
      console.log(res);
      const text = await res.text();
      setData(text);
    }
    fetchData();
  }, [day.data]);
  return (
    <div className="day">
      <textarea className="data-input" placeholder="Loading Data..." value={data} onChange={({target: {value}}) => setData(value)}></textarea>
      <div className="output-1">Part 1: {data ? day.part1(data) : "Missing input data"}</div>
      <div className="output-2">Part 2: {data ? (day.part2 ? day.part2(data) : "No part 2 code") : "Missing input data"}</div>
    </div>
  );
}
