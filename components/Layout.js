import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <React.Fragment>
    <Head>
      <link rel="shortcut icon" type="image/x-icon" href="static/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      />
    </Head>
    <Navbar />
    {children}
  </React.Fragment>
);

export default Layout;
