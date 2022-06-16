import './App.css'
import { Home } from './pages/Home';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { TopRated } from './pages/TopRated';
import { Results } from './pages/Results';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/toprated" element={<TopRated/>} />
          <Route path="/results" element={<Results/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
