import React from "react";
import { Container } from "@material-ui/core";
import PostDetails from "./components/PostDetails/PostDetails";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Navbar } from "./components/Navbar/Navbar";
// import { Home } from "./components/Home/Home";
import { Auth } from "./components/Auth/Auth";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  // console.log(user, "lol");
  return (
    <BrowserRouter>
      <Container maxwidth="xl">
        <Routes>
          <Route path="/" exact element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};
export default App;
