import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import Layout from "../components/Layout";

class New extends React.Component {
  state = {
    form: {
      title: "",
      body: ""
    },
    loading: false
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(({ form }) => ({
      form: { ...form, [name]: value }
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { form } = this.state;

    this.setState(() => ({ loading: true }));
    const res = await fetch(
      "https://nameless-inlet-18012.herokuapp.com/posts.json",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          post: form
        })
      }
    );
    const data = await res.json();
    Router.push(`/show?id=${data.id}`, `/posts/${data.id}`);
  };

  render() {
    const {
      form: { title, body },
      loading
    } = this.state;

    return (
      <React.Fragment>
        <Head>
          <title>{title || "New post"} | Modium</title>
        </Head>

        <Layout>
          <section className="section">
            <div className="container">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter a title"
                      name="title"
                      value={title}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Body</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Write some text"
                      rows={10}
                      name="body"
                      value={body}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button
                      className={`button is-primary ${
                        loading ? "is-loading" : ""
                      }`}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <Link href="/" prefetch>
                      <button className="button is-text">Cancel</button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </Layout>
      </React.Fragment>
    );
  }
}

export default New;
