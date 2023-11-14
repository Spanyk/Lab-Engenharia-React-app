import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Home } from './pages/Home/Home';
import Atv1 from "./pages/Aula1/atv1";
import Atv2 from "./pages/Aula2/atv2";
import Atv3 from "./pages/Aula3/index";
import Atv4 from "./pages/Aula4/index";


export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercicio/atv1" element={<Atv1 />} />
                <Route path="/exercicio/atv2" element={<Atv2 />} />
                <Route path="/exercicio/atv3" element={<Atv3 />} />
                <Route path="/exercicio/atv4" element={<Atv4 />} />

            </Routes>
        </BrowserRouter>
    )
}
