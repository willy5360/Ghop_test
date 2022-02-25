import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <div className="MainHome">
                <Link className="btn btn-success" to="/login">
                    Login
                </Link>
            </div>
        </>
    );
}

export default App;
