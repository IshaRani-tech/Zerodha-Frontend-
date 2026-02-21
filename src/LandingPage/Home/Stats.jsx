export default function Stats() {
  return (
    <section>
      <div className="container mt-5 p-5">
        <div className="row mt-5">
          <div className="col-lg-5 text-start">
            <h3 className="mb-5">Trust with confidence</h3>
            <h3>Costomer-first always</h3>
            <p className="mb-5 text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
            <h3>No spam or gimmicks</h3>
            <p className="mb-5 text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <a href="https://zerodha.com/about/philosophy">
                Our philosophies.
              </a>
            </p>
            <h3>The Zerodha universe</h3>
            <p className="mb-5 text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h3>Do better with money</h3>
            <p className="mb-5 text-muted">
              With initiatives like{" "}
              <a href="https://support.zerodha.com/category/trading-and-markets/alerts-and-nudges/nudges/articles/what-is-nudge">
                Nudge
              </a>{" "}
              and{" "}
              <a href="https://support.zerodha.com/category/console/segments/killswitch/articles/what-is-the-kill-switch">
                Kill Switch
              </a>
              , we don't just facilitate transactions, but actively help you do
              better with your money.
            </p>
          </div>
          <div className="col-lg-7 mb-5 p-5">
            <img
              className="mb-5"
              style={{ width: "110%" }}
              src="images/ecosystem.png"
            ></img>
            <a href="https://zerodha.com/products">
              Explore our products <i className="fa fa-arrow-right"></i>
            </a>{" "}
            &nbsp; &nbsp; &nbsp;
            <a href="https://kite-demo.zerodha.com/dashboard">
              Try Kite demo <i className="fa fa-arrow-right"></i>
            </a>
          </div>
          <img
            style={{ width: "65%" }}
            className="d-block mx-auto mb-5"
            src="images/press-logos.png"
          ></img>
        </div>
      </div>
    </section>
  );
}
