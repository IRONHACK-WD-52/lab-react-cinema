import React, { Component } from "react";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import MovieDetail from "./components/MovieDetail";
import Movies from "./components/Movies";
import NewMovie from "./components/NewMovie";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id" component={MovieDetail} />
      </Switch>
    </BrowserRouter>
  );
}

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}*/

export default App;
