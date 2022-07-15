import './input.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Testimonials from './Components/Testimonials/Testimonials';
import Projects from './Components/Projects/Projects';
// import "./myStyle.css"
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
        <Route path="/">
            <Route index element={
                <Home/>
            } />
          </Route>
        
          <Route path="/Projects">
            <Route index element={
                <Projects/>
            } />
          </Route>
          <Route path="/Testimonials">
            <Route index element={
                <Testimonials/>
            } />
          </Route>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
