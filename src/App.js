import * as S from "./styles/global.js";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import  Home  from "./pages/Home/Home.jsx";
import Curriculum from "./pages/Curriculum/Curriculum.jsx";
import MyStacks from "./pages/MyStacks/MyStacks.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";

function App() {
  return (
    // Aqui estão todas as rotas das páginas
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/curriculum" element={<Curriculum/>}/>
        <Route path="/mystacks" element={<MyStacks/>}/>
        <Route path="/404" element={<PageNotFound/>} />
        <Route path="*" element={<Navigate to="/404"/>}/> 
      </Routes>
      <S.GlobalStyle/>
    </Router>

  );
}

export default App;
