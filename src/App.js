import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
import { Contact } from "./Components/Contact";
import { Phases } from "./Components/Phases";

import "./Styles/App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/phases" element={<Phases />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
