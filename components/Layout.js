import React from 'react';
import Head from 'next/head';

import { LayoutStyle } from './styles/LayoutStyle';

const Layout = props => {
  return (
    <div className="container">
      <Head>
        <title>Publist News</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.4/css/mdb.min.css"
          rel="stylesheet"
        />
      </Head>
      <div>
        <div className="jumbotron main-jumbotron">
          <h1 className="h1-reponsive mb-3">
            <strong>Publist News</strong>
          </h1>
          <p className="lead">Keep track of articles from the web.</p>
        </div>
        <div className="container">{props.children}</div>
      </div>
      <style jsx>{LayoutStyle}</style>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
      />
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js"
      />
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js"
      />
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.4/js/mdb.min.js"
      />
    </div>
  );
};

export default Layout;
