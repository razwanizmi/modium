import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";

const Index = ({ posts }) => (
  <React.Fragment>
    <Layout>
      <section className="section">
        <div className="container">
          {posts.map(post => (
            <Link
              key={post.id}
              as={`/posts/${post.id}`}
              href={`/show?id=${post.id}`}
              prefetch
            >
              <div className="box post-link">
                <h3 className="title is-3">{post.title}</h3>
                <ReactMarkdown source={post.body.slice(0, 140)} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>

    <style jsx>{`
      .post-link {
        cursor: pointer;
      }
    `}</style>
  </React.Fragment>
);
Index.propTypes = {
  posts: PropTypes.array.isRequired
};
Index.getInitialProps = async () => {
  const res = await fetch(
    "https://nameless-inlet-18012.herokuapp.com/posts.json"
  );
  const posts = await res.json();

  return { posts };
};

export default Index;
