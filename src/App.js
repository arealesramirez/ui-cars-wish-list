import "./App.sass";

import NavBar from "./components/nav/nav";
import CarList from "./pages/car-list/car-list";
import CarCreate from "./pages/car-create/car-create";

import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/new">
          <CarCreate />
        </Route>

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <CarList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
