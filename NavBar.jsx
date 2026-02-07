import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="container p-2 ms-3">
        <Link className="navbar-brand" to="/">
          <img
            src="images-20260112T144402Z-1-001\images\logo.svg"
            alt="logo"
            style={{ width: "22%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav  ms-5 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active text-muted active"
                  aria-current="page"
                  to="/signUp"
                >
                  SignUp
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active text-muted" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active text-muted" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active text-muted" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active text-muted" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
