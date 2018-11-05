import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ProjectPage from "./components/ProjectPage";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/project/Restaurant Roulette"
      render={() => (
        <ProjectPage
          name="Restaurant Roulette"
          description="This is a description about Restaurant Roulette"
        />
      )}
    />
    <Route
      exact
      path="/project/MooMoo Farms Delivery"
      render={() => (
        <ProjectPage
          name="Moo Moo Farms"
          description="This is a description about Moo Moo Farms"
        />
      )}
    />
    <Route
      exact
      path="/project/Trivia"
      render={() => (
        <ProjectPage
          name="Trivia Game"
          description="This is a description about Trivia Game"
        />
      )}
    />
    <Route
      exact
      path="/project/RoboRace"
      render={() => (
        <ProjectPage
          name="RoboRace"
          description="This is a description about RoboRace"
        />
      )}
    />
  </Switch>
);
