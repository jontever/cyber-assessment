import Link from "next/link";
import Head from "next/head";

export default function Layout({ children, title = "Govassure" }) {
  return (
    <>
      <Head>
        <title>{title} – Govassure</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="NCSC Cyber Assessment Framework v4.0 self-assessment tool" />
      </Head>

      <header className="ga-header">
        <div className="ga-header__container">
          <Link href="/" className="ga-header__logo">
            <span className="ga-header__logo-name">Govassure</span>
            <span className="ga-header__logo-tag">CAF v4.0 Self-Assessment</span>
          </Link>
          <nav className="ga-header__nav" aria-label="Primary navigation">
            <Link href="/">Home</Link>
            <Link href="/assessment">Assessment</Link>
            <Link href="/results">Results</Link>
          </nav>
        </div>
      </header>

      <div className="ga-phase-banner" role="region" aria-label="Service information">
        <div className="ga-phase-banner__container">
          <span className="govuk-tag govuk-tag--blue">BETA</span>
          <span>
            This is a self-assessment tool. Results are stored locally in your browser and are never sent to a server.
          </span>
        </div>
      </div>

      <main className="ga-container" style={{ paddingTop: 32, paddingBottom: 64 }}>
        {children}
      </main>

      <footer
        style={{
          background: "#f3f2f1",
          borderTop: "1px solid #b1b4b6",
          padding: "24px 0",
          marginTop: 40,
        }}
      >
        <div className="ga-container" style={{ fontSize: 14, color: "#505a5f" }}>
          <p style={{ margin: 0 }}>
            Govassure is an independent tool. It is not affiliated with, endorsed by, or produced by NCSC, Cabinet
            Office, or any UK government department.{" "}
            <a
              href="https://www.ncsc.gov.uk/collection/caf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1d70b8" }}
            >
              CAF v4.0 is published by NCSC
            </a>
            . Your assessment data stays in your browser.
          </p>
        </div>
      </footer>
    </>
  );
}
