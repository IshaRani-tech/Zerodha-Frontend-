import "./Pricing.css";

export default function Pricing() {
  return (
    <section className='mb-5 pb-5'>
      <div className="container">
        <div className="row">
          <div className="col-4 text-start">
            <h2 className="mb-3 fs-3">Unbeatable pricing</h2>
            <p>
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
          </div>
          {/* <div className="col-1"></div> */}
          <div className="col-8">
            <div className="row ">
              <div
                className="col text-muted text-start "
                style={{ fontSize: "15px" }}
              >
                <div className="boxone">
                  <p className="paraone">
                    Free account
                    <br></br>
                    opening
                  </p>
                </div>
              </div>

              <div
                className="col text-muted text-start "
                style={{ fontSize: "15px" }}
              >
                <div className="boxtwo">
                  <p className="paratwo">
                    Free equity delivery
                    <br></br>
                    and direct mutual funds
                  </p>
                </div>
              </div>

              <div
                className="col text-muted text-start"
                style={{ fontSize: "15px" }}
              >
                <div className="boxthree">
                  <p className="parathree">
                    Intraday and
                    <br></br>
                    F&O
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="d-flex justify-content-start"
          href="https://zerodha.com/charges/#tab-equities"
        >
          See Pricing  <i className="fa fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}
