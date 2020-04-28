import React from "react";
import Title from "../src/components/common/Title";
import HomePage from "./components/HomePage/HomePage";
import PostPage from "./components/PostPage/PostPage";
import { Route, Switch } from "react-router";

function App() {
  return (
    <>
      <div className="app-container">
        <Title />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/post/:id" component={PostPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
