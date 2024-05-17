import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import SectionSecond from "./components/SectionSecond";
import Description from "./components/Description";
import SectionThree from "./components/SectionThree";
import Team from "./components/Team";
import Blog from "./components/Blog";
import About from "./components/About";
import BlogFilter from "./components/BlogFilter";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          {/* <Hero />
          <SectionSecond />
          <Description />
          <SectionThree />
          <Team />
          <Blog />
          <About /> */}
          <Header />
          <About />
        </>} />
        <Route path="/BlogFilter" element={<BlogFilter />} />
      </Routes>
    </Router>
  );
}

export default App;
