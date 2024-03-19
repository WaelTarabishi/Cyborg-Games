import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Contanier } from "./Components/index";
import { Home, Profile } from "./Pages/index";
import { Header, Footer } from "./Section/index";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Contanier>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Profile" element={<Profile />} />
          </Routes>
        </Contanier>
        <Footer />
      </Router>
    </>
  );
};
export default App;
