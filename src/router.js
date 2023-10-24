import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Home } from './pages/Home/Home';
import Atv1 from "./pages/Aula1/atv1";
import Atv2 from "./pages/Aula2/atv2";


export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercicio/atv1" element={<Atv1 />} />
                <Route path="/exercicio/atv2" element={<Atv2 />} />

            </Routes>
        </BrowserRouter>
    )
}
