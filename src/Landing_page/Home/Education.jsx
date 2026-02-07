import React from "react";

export default function Education() {
  return (
    <section>
      <div className="row mb-5 p-5 ">
        <div className="col-5">
          <img src="images-20260112T144402Z-1-001\images\index-education.svg"></img>
        </div>
        <div className="col-1"></div>
        <div className="col-6 mt-5 text-start">
          <h2 className='mb-4 fs-2'>Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href='https://zerodha.com/varsity/'>Varsity <i className="fa fa-arrow-right"></i></a>
          <p className='mt-5'>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a className='mt-3' href='https://tradingqna.com/'> TradingQ&A <i className="fa fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
  );
}
