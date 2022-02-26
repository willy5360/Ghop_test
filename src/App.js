import { Link } from "react-router-dom";
import LOGO from "./img/Circulo-con-letras-min.png";

function App() {
    return (
        <>
            <div className="MainHome">
                <div className="row d-flex justify-content-center">
                    <img src={LOGO} />
                    <h1>Bienvenido a Ghop</h1>
                    <p>Tiendas inteligentes</p>
                </div>
                <div className="row justify-content-center ">
                    <Link id="btn-grad" to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
}

export default App;
