import React from "react";
import Main from "./components/Main";
import Wishlist from "./components/Wishlist";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className=" my-32 mx-60">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favorite" element={<Wishlist />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
