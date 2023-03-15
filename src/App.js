import "./App.css";
import { Route, Routes } from "react-router-dom";
import Discover from "./components/Discover";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Discover />} />
      </Routes>
    </div>
  );
}

export default App;
