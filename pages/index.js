import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

const Index = ({ posts }) => (
  <>
    <Layout>
      <section className="section">
        <div className="container">
          {posts.map(post => (
            <Link
              key={post.id}
              as={`/posts/${post.id}`}
              href={`/show?id=${post.id}`}
            >
              <div className="box post-link">
                <h3 className="title is-3">{post.title}</h3>
                <p>{post.body}</p>
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
  </>
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
