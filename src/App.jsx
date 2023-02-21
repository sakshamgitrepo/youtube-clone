import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";

function App() {
 

  return (
    <BrowserRouter>
    <div className="flex flex-col h-full">
      <Header />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
        <Route path="/video/:id" element={<VideoDetails />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
