import Link from "next/link";

class Navbar extends React.Component {
  state = {
    sideMenuIsActive: false
  };

  toggleSideMenu = () => {
    this.setState(({ sideMenuIsActive }) => ({
      sideMenuIsActive: !sideMenuIsActive
    }));
  };

  render() {
    const { sideMenuIsActive } = this.state;

    return (
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <Link href="/" prefetch>
            <a className="navbar-item">
              <span className="title is-3 has-text-white">Modium</span>
            </a>
          </Link>
          <div className="navbar-burger burger" onClick={this.toggleSideMenu}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navbar-menu"
          className={`navbar-menu ${sideMenuIsActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link as="/posts/new" href="/new" prefetch>
                    <a className="button is-primary">
                      <span className="icon">
                        <i className="fas fa-pen" />
                      </span>
                      <span>New Post</span>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
