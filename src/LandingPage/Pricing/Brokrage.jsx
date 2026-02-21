import { useState } from "react";
import "./Brokrage.css";

export default function Brokrage() {
  const [currTab, setCurrTab] = useState("equity");

  const renderTab = () => {
    return (
      <section>
        <div className="section">
          <table className="table table-striped table-responsive align-middle text-start" id="Equity">
            <thead className="">
              <tr style={{ font: "#424242" }}>
                <th scope="col"></th>
                <th scope="col">Equity delivery</th>
                <th scope="col">Equity intraday</th>
                <th scope="col">F&O - Futures</th>
                <th scope="col">F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Brokerage</th>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <th scope="row">STT/CTT</th>
                <td>0.1% on buy & sell</td>
                <td>0.025% on the sell side</td>
                <td>0.025% on the sell side</td>
                <td>
                  <ul>
                    <li>
                      0.125% of the intrinsic value on options that are bought
                      and exercised
                    </li>
                    <li>0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th scope="row">Transaction charges</th>
                <td>
                  NSE: 0.00297% <br />
                  BSE: 0.00375%
                </td>
                <td>
                  NSE: 0.00297% <br />
                  BSE: 0.00375%
                </td>
                <td>
                  NSE: 0.00173% <br />
                  BSE: 0
                </td>
                <td>
                  NSE: 0.03503% (on premium)
                  <br />
                  BSE: 0.0325% (on premium)
                </td>
              </tr>
              <tr>
                <th scope="row">GST</th>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <th scope="row">SEBI charges</th>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <th scope="row">Stamp charges</th>
                <td>0.015% or ₹1500 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Calculate your costs upfront using our brokerage calculator</p>

        {/* <div className="container m-4">
        <nav className="row g-5 text-start d-block fs-3 p-2 border-bottom">
          <span>
            <a className="col hover-color" href="" id="Equity">
              {" "}
              Equity
            </a>
          </span>

          <span>
            <a className="col hover-color" href="" id="Currency">
              Currency
            </a>
          </span>
          <span>
            <a className="col hover-color" href="" id="Commodity">
              Commodity
            </a>
          </span>
        </nav>
      </div>   */}
      </section>
    );
  };

  return (
    <div className="container m-4">
      <nav className="row g-5 text-start d-block fs-3 p-2 33eborder-bottom">
        <span >
          <a className="hover-color" href="#" onClick={ () => setCurrTab("equity") } > {currTab === "equity" ?  "" : ""} Equity</a>
        </span>
        <span >
          <a className="hover-color" href="" id="Currency">Currency</a>
        </span>
        <span >
          <a className="hover-color" href="" id="Commodity">Commodity</a>
        </span>
      </nav>
    </div>
  )
}
