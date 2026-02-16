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
      <div className="row m-5 p-5 text-center">
        <h3 className="">Charges</h3>
        <p className="pt-2 fs-5 text-muted">List of all charges and taxes</p>

      </div>


      <div className="container mt-5 pt-4">
        <div className="row m-5 g-5">
          {images.map((image) => (
            <div className="col-md-4" key={image.id}>
              <img src={image.img} alt={image.alt} className="img-fluid mx-auto pb-3 d-block" style={{ height: "45%", objectFit: "cover" }}/>
              <h3>{image.header}</h3>
              <p className="text-muted pt-3" style={{lineHeight: "1.8", fontSize: "18px"}}>{image.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
