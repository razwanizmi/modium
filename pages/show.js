import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

class Show extends React.Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  };

  static getInitialProps = async context => {
    const { id } = context.query;
    const res = await fetch(
      `https://nameless-inlet-18012.herokuapp.com/posts/${id}.json`
    );
    const post = await res.json();

    return { post };
  };

  render() {
    const { post } = this.props;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h3 className="title is-3">{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Show;
