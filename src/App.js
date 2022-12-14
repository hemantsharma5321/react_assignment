
import "./App.css";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Home from "./pages/Home";
import ComponentAssign from "./pages/componentAssign";
import {Routes, Route,} from 'react-router-dom';
import Props from "./pages/Props-002";
import Props1 from "./pages/Props-001";
import States001 from "./pages/States-001";
import States2 from "./pages/States-002";
import PasswordGenerator from "./pages/passwordGenerator";


function App() {
  return (
    <div className="App">
      
      |<Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/page1" element={<Page1/>}></Route>
        <Route path="/page2" element={<Page2/>}></Route>
        <Route path="/componentAssign" element={<ComponentAssign/>}></Route>
        <Route path="/Props-002" element={<Props/>}></Route>
        <Route path="/props-001" element={<Props1/>}></Route>
       <Route path="/States-001" element={<States001/>}></Route>
       <Route path="/States-002" element={<States2/>}></Route>
       <Route path="/States-003" element={<PasswordGenerator/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
