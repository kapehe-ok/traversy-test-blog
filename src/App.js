import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Content from "./components/Content.js";
import SingleContent from "./components/SingleContent.js";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={SingleContent} path="/content/:slug" />
        <Route component={Content} path="/content" />
        <Route component={Projects} path="/projects" />
        <Route component={About} path="/about" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
