import { Link } from "react-router-dom";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  primaryLink,
  secondaryLink,
  googlePlay,
  appStore,
}) {
  return (
    <section className="m-5">
      <div className="container m-5 p-5">
        <div className="row g-5 align-items-center d-flex justify-content-evenly gap-5">
          <div className="col">
            <img src={imageURL} className="img-fluid" />
          </div>
          <div className="col text-start text-muted w-10">
            <h3>{productName}</h3>
            <p>{productDescription}</p>
            <div className="d-flex gap-4">
              {/* {condition && <Component />}
                  means → show only when true. */}
              {primaryLink && (
                <Link to={primaryLink.url}>
                  {primaryLink.lable} <i className="fa-solid fa-arrow-right"></i>
                </Link>
              )}
              {secondaryLink && (
                <Link to={secondaryLink.url}>
                  {secondaryLink.lable} <i className="fa-solid fa-arrow-right"></i>
                </Link>
              )}
            </div>
            <br />
            <div className="d-flex gap-3">
              {googlePlay && (
                <a href={googlePlay}>
                  <img src="images-20260112T144402Z-1-001\images\googlePlayBadge.svg" />
                </a>
              )}
              {appStore && (
                <a href={appStore}>
                  <img src="images-20260112T144402Z-1-001\images\appstoreBadge.svg" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
