import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="index.html">
                        <img width="70" height="40" src="img/logol.png" alt=""  />
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul
                            className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center"
                        >
                            <li className="nav-item">
                                <div className="dropdown ps-2">
                                    <button
                                        className="btn dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fa-solid fa-location-dot fs-4 text-success"></i>
                                        Elige tu modo de entrega
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <button className="dropdown-item d-block" type="button">
                                                Action
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" type="button">
                                                Another action
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" type="button">
                                                Something else here
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <div className="col-sm-12 col-lg-4 col-xl-6">
                            <form className="d-flex" role="search">
                                <div className="input-group">
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="¿Qué estas buscando?"
                                        aria-label="¿Qué estas buscando?"
                                    />
                                    <span
                                        role="button"
                                        type="submit"
                                        className="input-group-text bg-success"
                                        id="basic-addon2"
                                    >
                                        <i className="fa-solid fa-magnifying-glass text-light"></i>
                                    </span>
                                </div>
                            </form>
                        </div>

                        <div className="dropdown nav-link">
                            <button
                                className="btn dropdown-toggle fw-bold"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fa-regular fs-4 fa-user text-success px-1"></i>
                                Ingresa/Registrate
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button className="dropdown-item d-block" type="button">
                                        <a
                                            className="text-decoration-none text-dark"
                                            href="inicioSesion.html"
                                        >Ingresar</a
                                        >
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="dropdown-item d-block text-success"
                                        type="button"
                                    >
                                        <a className="text-success fw-bold" href="registro.html"
                                        >Registrarse</a
                                        >
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <button
                            className="btn position-relative"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                        >
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span
                                className="position-absolute top-0 start-1000 translate-middle badge rounded-pill bg-danger"
                            >
                                1
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
