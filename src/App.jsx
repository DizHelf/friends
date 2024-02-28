import React from "react";
import Header from "./components/header";
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostsPage from "./pages/PostsPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/posts/:userId?" element={<PostsPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </>
  );
}

export default App;
