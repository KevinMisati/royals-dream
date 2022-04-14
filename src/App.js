import Home from "./pages/Home"
import Login from "./pages/Login"
import Footer from "./components/Footer"
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
