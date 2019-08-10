import React from "react";
import Document, { Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document<{
  styleTags: any;
}> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    return {
      ...page,
      styleTags: <>{sheet.getStyleElement()}</>
    };
  }

  render() {
    const { styleTags } = this.props;

    return (
      <html lang="en">
        <head>
          <title>NextJS Demo</title>
          {styleTags}
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
