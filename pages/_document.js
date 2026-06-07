import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="govuk-template">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/govuk-frontend@5.4.1/dist/govuk/govuk-frontend.min.css" />
      </Head>
      <body className="govuk-template__body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
