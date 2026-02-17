import {Link} from "react-router-dom";

export default function RightSection({
  imageURL,
  productName,
  productDescription,
  primaryLink,
}) {
    return(
        <section className="m-5">
            <div className="container m-5 p-5">
                <div className="row g-5 align-items-center d-flex justify-content-evenly gap-5">
                    <div className="col text-start text-muted">
                        <h3>{productName}</h3>
                        <p>{productDescription}</p>
                        {primaryLink && (
                            <Link to={primaryLink.url}>{primaryLink.lable} <i className="fa-solid fa-arrow-right"></i></Link>
                        )}
                        
                    </div>
                    <div className="col">
                        <img src={imageURL}></img>
                    </div>
                </div>
            </div>
        </section>
    );
}