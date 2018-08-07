import Link from "next/link";
import Layout from "../components/Layout";

class Counter extends React.Component {
  state = {
    counter: 0
  };

  countDown = () => {
    if (!this.state.counter) return;
    this.setState(({ counter }) => ({
      counter: counter - 1
    }));
  };

  countUp = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Layout>
          <div className="container">
            <h1 className="title is-1">{this.state.counter}</h1>
            <div className="buttons">
              <button
                className="button is-danger is-large"
                onClick={this.countDown}
              >
                <i className="fas fa-minus" />
              </button>
              <button
                className="button is-primary is-large"
                onClick={this.countUp}
              >
                <i className="fas fa-plus" />
              </button>
            </div>
            <p>
              Back to{" "}
              <Link href="/">
                <a>home</a>
              </Link>
            </p>
          </div>
        </Layout>

        <style jsx>{`
          .container {
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: center;
          }

          .buttons {
            display: flex;
            justify-content: space-between;
            width: 150px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Counter;
