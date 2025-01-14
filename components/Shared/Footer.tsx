import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-top">
              <p>Make your project live and profitable</p>
              <h2>
                <Link href="mailto:contact@formixcode.com">contact@formixcode.com</Link>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            {/* <p className="copy-left-text">
              Template by{" "}
              <Link href="https://themeforest.net/user/themeswolf/portfolio">
                ThemesWolf
              </Link>
            </p> */}
          </div>
          <div className="col-lg-6 col-sm-6">
            <p className="copy-right-text">&copy; Copyright 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
