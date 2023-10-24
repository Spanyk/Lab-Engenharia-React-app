import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Home } from './pages/Home/Home';
import  Atv1 from "./pages/Aula1/atv1";


export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercicio/atv1" element={<Atv1 />} />
            </Routes>
        </BrowserRouter>
    )
}
