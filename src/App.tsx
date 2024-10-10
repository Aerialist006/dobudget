import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage Main={Home} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
