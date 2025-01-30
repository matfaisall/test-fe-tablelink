import "./App.css";
import { RoutersApp } from "../routers";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <RoutersApp />
    </Router>
  );
}

export default App;
