import React from "react";
import Title from "../src/components/common/Title";
import HomePage from "./components/HomePage/HomePage";
import PostPage from "./components/PostPage/PostPage";
import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app-container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Title />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/post/:id" component={PostPage} />
      </Switch>
    </div>
  );
}

export default App;
