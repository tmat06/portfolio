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
          skills="REACT | NODE | EXPRESS | POSTGRESQL | JAVASCRIPT | GIT | SOCKET.IO | REDUX | MATERIAL UI | OUTSIDE API"
          description="A self-developed application to help users select restaurants near a specific address. Google Places API was used in order to collect restaurants within a specific range designated by the user. React was used as the front end framework while Node and Express were used for the back end development."
          next="/project/MooMoo Farms Delivery"
          before="/project/RoboRace"
          images={[
            "/images/RRLogin.PNG",
            "/images/google-maps.PNG",
            "/images/Results.PNG",
            "/images/Profile.PNG",
            "/images/RRWinner.PNG"
          ]}
          siteURL="https://restaurantroulette.timmymatthews.com"
          githubRepoURL="https://github.com/tmat06/restaurant-roulette"
        />
      )}
    />
    <Route
      exact
      path="/project/MooMoo Farms Delivery"
      render={() => (
        <ProjectPage
          name="Moo Moo Farms"
          skills="REACT NATIVE | MATERIAL-UI | GOOGLE MAPS API"
          description="A delivery service application designed for customers of the Moo Moo Farms Cambodia based dairy farm.  Integration of Google Maps allows the customer to designate pick up locations anywhere within the approved location.  My responsiblities were over the initial design and creation of the app as well as the implementation of the Google Map configurations."
          next="/project/Trivia"
          before="/project/Restaurant Roulette"
          images={[
            "/images/moomoo-mobile.PNG",
            "/images/moomoo-mobile2.PNG",
            "/images/moomoo-mobile3.PNG",
            "/images/moomoo-mobile4.PNG",
            "/images/moomoo-mobile5.PNG"
          ]}
          siteURL="https://itunes.apple.com/us/app/moo-moo-farms/id1434998665?mt=8&ign-mpt=uo%3D4"
          githubRepoURL="https://github.com/jamischarles/moo-moo-app"
        />
      )}
    />
    <Route
      exact
      path="/project/Trivia"
      render={() => (
        <ProjectPage
          name="Trivia Game"
          skills="REACT | SOCKET.IO | EXPRESS | REDUX | POSTGRESQL | MASSIVE | REGEX | REACT-MOTION | OPENTDB API"
          description="A self-developed trivia based application implementing the use of Socket.io for real time responses.  Animations were done through the use of React-Motion.  React was used as the front end framework while Node and Express were used for the back end."
          next="/project/RoboRace"
          before="/project/MooMoo Farms Delivery"
          images={[
            "/images/trivia-hosting.PNG",
            "/images/trivia-login.PNG",
            "/images/trivia-questions.PNG",
            "/images/trivia-results.PNG",
            "/images/trivia-winner.PNG"
          ]}
          siteURL="https://trivia.timmymatthews.com"
          githubRepoURL="https://github.com/tmat06/trivia-game"
        />
      )}
    />
    <Route
      exact
      path="/project/RoboRace"
      render={() => (
        <ProjectPage
          name="RoboRace"
          skills="REACT | NODE | EXPRESS | POSTGRESQL | SOCKET.IO | OUTSIDE API | CRON | MATERIAL UI | REDUX | REACT-MOTION"
          description="Inspired by Jackbox.tv games, this application implements Socket.io heavily to create a real-time trivia quiz game played with up to multiple players. I was personally involved with the implementation of Cron, Socket.io, Overall design, as well as lead over the data flow of the project. React was used as the front end framework while Node and Express was used for the back end."
          next="/project/Restaurant Roulette"
          before="/project/Trivia"
          images={[
            "/images/robo-race.PNG",
            "/images/FinalResults.PNG",
            "/images/Landing.PNG",
            "/images/Race.PNG",
            "/images/Loading.PNG"
          ]}
          siteURL="https://roboracegame.com"
          githubRepoURL="https://github.com/team-electron/RoboRace"
        />
      )}
    />
  </Switch>
);
