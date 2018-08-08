import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

const Index = ({ posts }) => (
  <>
    <Layout>
      <section className="section">
        <div className="container">
          {posts.map(post => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <div className="box post-link">
                <h2 className="title is-2">{post.title}</h2>
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
Index.getInitialProps = async () => {
  const res = await fetch(
    "https://nameless-inlet-18012.herokuapp.com/posts.json"
  );
  const posts = await res.json();

  return { posts };
};

export default Index;
