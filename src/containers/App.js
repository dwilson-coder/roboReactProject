import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundry from "../components/ErrorBoundry";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfiled] = useState("");
  const [count, setCount] = useState(0);

  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: "",
  //   };
  // }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
    console.log(count);
  }, [count]);

  const onSearchChange = (event) => {
    // this.setState({ searchfield: event.target.value });
    setSearchfiled(event.target.value);
  };

  // const { robots, searchfield } = this.state;
  const filteredRobots = robots.filter((robot) => {
    return robot.name
      .toLocaleLowerCase()
      .includes(searchfield.toLocaleLowerCase());
  });
  return !robots.length ? (
    <h1>Loading ...</h1>
  ) : (
    <div className="tc">
      <h1>Robo Friends</h1>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
