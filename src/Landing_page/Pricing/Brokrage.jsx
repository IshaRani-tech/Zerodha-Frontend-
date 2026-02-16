import "./Brokrage.css";

export default function Brokrage() {
  return (
    <section>
      <div className="container border-bottom m-4">
        <nav className="row g-0 fs-4 p-2" style={{ width: "40%" }}>
          <a className="col hover-color" href="" id="Equity">
            Equity
          </a>
          <a className="col hover-color" href="" id="Currency">
            Currency
          </a>
          <a className="col hover-color" href="" id="Commodity">
            Commodity
          </a>
        </nav>

        <div className="section">
          <table class="table">
            <thead>
              <tr>
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
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">STT/CTT</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">Transaction charges</th>
                <td>John</td>
                <td>Doe</td>
                <td>@social</td>
              </tr>
              <tr>
                <th scope="row">GST</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">SEBI charges</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">Stamp charges</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
