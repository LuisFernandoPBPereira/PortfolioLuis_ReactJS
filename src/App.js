import * as S from "./styles/global.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import  Home  from "./pages/Home/Home.jsx";
import Curriculum from "./pages/Curriculum/Curriculum.jsx";
import About from "./pages/About/About.jsx";

function App() {
  return (
    // Aqui estão todas as rotas das páginas
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/curriculum" element={<Curriculum/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <S.GlobalStyle/>
    </Router>

  );
}

export default App;
