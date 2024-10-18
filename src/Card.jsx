import profilePic from "./assets/download1.jpg"

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="" />
      <h2 className="card-title">Bro Code</h2>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

export default Card;
