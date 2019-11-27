import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mapa from "./pages/Mapa";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Mapa} />
            {/* <Route exact path="/Hooks" component={Hooks} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
