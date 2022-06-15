import './App.css'
import { Home } from './pages/Home';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { TopRated } from './pages/TopRated';
/**
 * Load movies on home page
 * API key 7574dfa3f440636c752e8baf90fd52da
 * Have a page for all movies
 */
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/toprated" element={<TopRated/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
