import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <div className="container">
      <div className="text-box">
        <h1 className="title is-1">Welcome to</h1>
        <img src="static/next.png" alt="Next.js logo" className="next-logo" />
      </div>
      <p>
        This is a{" "}
        <Link href="/counter">
          <a>link</a>
        </Link>
      </p>
    </div>

    <style jsx>{`
      .container {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
      }

      .text-box {
        align-items: flex-start;
        display: flex;
      }

      .next-logo {
        height: 64px;
        margin-left: 10px;
      }
    `}</style>
  </Layout>
);

export default Index;
