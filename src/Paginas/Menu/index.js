import React from 'react';
import './estilo.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';


function Menu(){
    return(
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/basicos" className="nav-link active" aria-current="page" >01 Básicos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cvida" className="nav-link active" aria-current="page" >02 Ciclo de vida</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rutas" className="nav-link active" aria-current="page" >03 Routing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rutas" className="nav-link active" aria-current="page" >04 Redux</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rutas" className="nav-link active" aria-current="page" >05 Redux Toolkit</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rutas" className="nav-link active" aria-current="page" >06 API Fetch: Axios</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rutas" className="nav-link active" aria-current="page" >07 API Fetch: ReactQuery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rutas" className="nav-link active" aria-current="page" >08 CRUD Single Entity</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rutas" className="nav-link active" aria-current="page" >09 CRUD OneToMany</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rutas" className="nav-link active" aria-current="page" >10 Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rutas" className="nav-link active" aria-current="page" >11 ShoppingCart</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </Router>
        
    )
}

export default Menu;