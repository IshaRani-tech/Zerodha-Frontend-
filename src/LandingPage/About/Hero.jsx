import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="mx-5 ">
      <h1 className="m-5 p-5 fs-3 text-center text-muted">
        We pioneered the discount broking model in India.
        <br />
        Now, we are breaking ground with our technology.
      </h1>
      <div className="row text-start m-5 p-5 d-flex justify-content-center gap-8 border-top">
        <div className="col p-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
            <br/>
            <br/>
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India. <br/><br/>
            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>
        
        <div className="col p-5">
            <p>
                In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors. <br/><br/>
                <Link to='/'>Rainmatter</Link>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.<br/><br/>
                And yet, we are always up to something new every day. Catch up on the latest updates on our <Link to=''>blog</Link> or see what the media is <Link to=''>saying about us</Link> or learn more about our business and product <Link to=''>philosophies</Link>.
            </p>
        </div>
      </div>
    </section>
  );
}
