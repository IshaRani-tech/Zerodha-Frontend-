export default function Hero() {
  let images = [
    {
      id: "1",
      img: "/images/pricingEquity.svg",
      alt: "pricing-eq",
      header: "Free equity delivery",
      text: "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.",
    },
    {
      id: "2",
      img: "/images/other-trades.svg",
      alt: "other-trades",
      header: "Intraday and F&O trades",
      text: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
    },
    {
      id: "3",
      img: "/images/pricing-eq.svg",
      alt: "pricing-eq",
      header: "Free direct MF",
      text: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
    },
  ];
  return (
    <section>
      <div className="text-center mb-5 pb-5">
        <h3 className="pt-3">Charges</h3>
        <p className="pt-3 fs-5 text-muted">List of all charges and taxes</p>
      </div>
      <div className="container">
        <div className="row g-5">
          {images.map((image) => (
            <div className="col-md-4" key={image.id}>
              <img src={image.img} alt={image.alt} className="img-fluid mx-auto d-block" style={{ height: "40%", objectFit: "cover" }}/>
              <h3>{image.header}</h3>
              <p className="text-muted">{image.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
