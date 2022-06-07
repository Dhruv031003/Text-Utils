import About from './myComponents/About.js'
import Header from './myComponents/Header.js';
import Form from './myComponents/TextForm.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}
  from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>

      <Router>
          <Header title='Text Utils' />
        <Routes>
          <Route exact path="/" element={<Form heading="Enter text to analyze below" mode="Mode" />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  )
}
export default App;
