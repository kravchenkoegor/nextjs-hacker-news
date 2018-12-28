import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

const Layout = (props) => {
  return (
    <div className="app">
      <Head>
        <title>{props.title}</title>
      </Head>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark shadow">
          {
            props.backButton &&
            <span className="back-button" onClick={() => Router.back()}>&#x2b05;</span>
          }
          <Link href="/">
            <a className="navbar-brand">Hacker Next</a>
          </Link>

          {/*<ul className="navbar-nav ml-auto">*/}
            {/*<li className="nav-item active">*/}
              {/*<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
              {/*<a className="nav-link" href="#">Link</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
              {/*<a className="nav-link disabled" href="#">Disabled</a>*/}
            {/*</li>*/}
          {/*</ul>*/}
        </nav>
      </header>

      <main className="main py-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {props.children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
