import React from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBarContainer.js";
import PostPage from "./components/PostsContainer/PostsPage.js";
import dummyData from "./dummy-data.js";

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  return (
    <div className="App">
      {/* Add components here  and pass props where appropriate */}
      <SearchBar />
      <PostPage posts={dummyData}/>
    </div>
  );
};

export default App;