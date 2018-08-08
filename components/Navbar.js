import Link from "next/link";

const Navbar = () => (
  <nav className="navbar is-primary">
    <div className="navbar-brand">
      <Link href="/">
        <a className="navbar-item">
          <span className="title is-3 has-text-white">Modium</span>
        </a>
      </Link>
      <div
        className="navbar-burger burger"
        data-target="navMenuColorprimary-example"
      >
        <span />
        <span />
        <span />
      </div>
    </div>
    <div id="navMenuColorprimary-example" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a className="button is-primary" href="/write">
                <span className="icon">
                  <i className="fas fa-pen" />
                </span>
                <span>New Post</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
