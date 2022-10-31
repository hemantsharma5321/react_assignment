
import "./App.css";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Home from "./pages/Home";
import {Routes, Route,} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      |<Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/page1" element={<Page1/>}></Route>
        <Route path="/page2" element={<Page2/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
