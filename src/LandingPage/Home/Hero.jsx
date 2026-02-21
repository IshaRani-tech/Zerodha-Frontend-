export default function Hero() {
  return (
    <section>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <img
            src="images/landing.svg"
            alt="Hero Image"
            className="mb-5"
          />
          <h3 className="mb-3">Invest in everything</h3>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            style={{ width: "35%", margin: "0 auto" }}
            className="btn btn-primary p-2 fs-5"
          >
            Sign up for free
          </button>
        </div>
      </div>
    </section>
  );
}
