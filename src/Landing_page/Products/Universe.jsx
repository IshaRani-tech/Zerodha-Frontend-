import { Link } from "react-router-dom";

export default function Universe() {
  let data = [
    {
      id: 1,
      img: "images/zerodhaFundhouse.png",
      text: (<>Our asset management venture <br/>that is creating simple and transparent index <br/> funds to help you save for your goals.</>),
      alt: "zerodhaFundhouse",
    },
    {
      id: 2,
      img: "/images/sensibullLogo.svg",
      text: (<>Options trading platform that lets you create <br/> strategies, analyze positions, and examine data points like open interest, FII/DII,and more.</>),
      alt: "sensibullLogo",
    },
    {
      id: 3,
      img: "/images/tijori.svg",
      text: (<>Investment research platform <br/>that offers detailed insights on stocks, <br/> sectors, supply chains, and more.</>),
      alt: "tijori",
    },
    {
      id: 4,
      img: "/images/streakLogo.png",
      text: (<>Systematic trading platform <br/> that allows you to create and backtest <br/> strategies without coding.</>),
      alt: "streak",
    },
    {
      id: 5,
      img: "/images/smallcaseLogo.png",
      text: (<>Thematic investing platform <br/> that helps you invest in diversified <br/> baskets of stocks on ETFs.</>),
      alt: "smallcase",
    },
    {
      id: 6,
      img: "/images/dittoLogo.png",
      text: (<>Personalized advice on life <br/> and health insurance. No spam <br/> and no mis-selling.</>),
      alt: "ditto",
    },
  ];

  return (
    <section>
      <div className="container text-muted">
        <h3 className="mb-4">The Zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row g-4 mx-5">
          {data.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="card border-0 text-muted text-center">
                <img className="img-fluid mx-auto d-block" style={{ height: "45px", objectFit: "contain" }} src={item.img} alt={item.alt}  />
                <p className="p-3 fw-semibold" style={{fontSize: "13px"}}>{item.text}</p>
              </div>

            </div>
          ))}
        </div>
        <a
            style={{ width: "15%" }}
            className="btn btn-primary p-2 fs-5 mb-5"
            href="#"
          >
            Sign up for free
          </a>
      </div>
    </section>
  );
}
