import { Link } from "react-router-dom";
import { useState } from "react";

const people = [
  {
    id: 1,
    name: "Nikhil Kamath",
    role: "Co-founder & CFO",
    img: "images/Nikhil.jpg",
    bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.",
  },
  {
    id: 2,
    name: "Dr. Kailash Nadh",
    role: "CTO",
    img: "images/Kailash.jpg",
    bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.",
  },
  {
    id: 3,
    name: "Venu Madhav",
    role: "COO",
    img: "images/Venu.jpg",
    bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.",
  },
  {
    id: 4,
    name: "Hanan Delvi",
    role: "CCO",
    img: "images/Hanan.jpg",
    bio: "We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.",
  },
  {
    id: 5,
    name: "Seema Patil",
    role: "Director",
    img: "images/Seema.jpg",
    bio: "Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.",
  },
  {
    id: 6,
    name: "Karthik Rangappa",
    role: "Chief of Education",
    img: "images/karthik.jpg",
    bio: `Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.`,
  },
  {
    id: 7,
    name: "Austin Prakesh",
    role: "Director Strategy",
    img: "images/Austin.jpg",
    bio: "Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.",
  },
];

function PersonCard({ person }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-muted mx-4">
      <div  className="d-flex justify-content-center" style={{ width: "330px", height: "260px" }}>
        <img
          src={person.img}
          alt={person.name}
          className="rounded-circle mb-3 d-block m-auto"
          style={{ width: "230px", height: "230px", objectFit: "cover" }}
        />
        
      </div>

      <h5 className="mb-1">{person.name}</h5>
      <p className="mb-2">{person.role}</p>

      <button
        className="btn btn-link text-muted text-decoration-none"
      // will only open/close one bio at a time which is clicked not all at a time and prev guarantees you always get the latest correct state 
        onClick={() => setOpen((prev) => !prev)} 
      >
        Bio{" "}
        {open ? (
          <i className="fa-solid fa-angle-up" />
        ) : (
          <i className="fa-solid fa-angle-down" />
        )}
      </button>
      
      {/* click Bio → open = true → paragraph appears(true)
      click again → open = false → paragraph disappears(false) 
      {condition && <Component />}
      means → show only when true.
      */}

      <div className="bio-box" style={{ maxWidth: "200px" }}>
        {open && <p className="mt-2  text-start">{person.bio}</p>}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="container my-5">
      <h3 className="text-muted mb-4">People</h3>
      <div className="row">
        <div className="col d-flex align-items-end flex-column">
          <div
            className="text-muted"
          >
            <img
              className="rounded-circle"
              style={{ height: "60%", width: "100%"}}
              src="images/nithinKamath.jpg"
              alt="Nithin Kamath"
            ></img>
            
            <h5 className="m-3">Nithin Kamath</h5>
            <p>Founder, CEO</p>
          
          </div>
          
        </div>
        <div className="col px-5 p-5 text-start">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.{" "}
            <br />
            <br />
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC). <br /> <br />
            Playing basketball is his zen.
            <br />
            <br />
            Connect on <Link to="">Homepage</Link> /{" "}
            <Link to="">TradingQnA</Link> / <Link to="">Twitter</Link>
          </p>
        </div>
      </div>

      

      <div className="row row-cols-1 row-cols-md-3 g-5">
        {people.map((person) => (
          <div key={person.id} className="col justify-content-md-center">
            <PersonCard  person={person} />{" "}
          </div>
        ))}
      </div>
    </section>
  );
}

