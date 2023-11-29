import { Link } from "react-router-dom";
import Calculadora from "./Calculadora";

export default function Atv4() {
  return (
    <div>
      <Calculadora />
      <Link to={"/"}>Voltar ao Menu</Link>
    </div>
  );
}
