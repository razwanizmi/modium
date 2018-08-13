import fetch from "isomorphic-unfetch";
import Head from "next/head";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import LikeButton from "../components/LikeButton";

class Show extends React.Component {
  state = {
    likeCount: 0
  };

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

  handleLike = () => {
    this.setState(({ likeCount }) => ({
      likeCount: likeCount + 1
    }));
  };

  render() {
    const { post } = this.props;
    const { likeCount } = this.state;

    return (
      <React.Fragment>
        <Head>
          <title>{post.title} | Modium</title>
        </Head>

        <Layout>
          <section className="section">
            <div className="container">
              <div className="content">
                <h3 className="title is-3">{post.title}</h3>
                <ReactMarkdown source={post.body} />
              </div>
              <div className="field">
                <div className="control">
                  <LikeButton likeCount={likeCount} onLike={this.handleLike} />
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Show;
