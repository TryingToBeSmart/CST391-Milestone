import { Link } from "react-router-dom";
import { Media } from "../interfaces/Media";

interface Props extends Media {
  buttonText: string;
  buttonAction?: string;
  onClick?: () => void;
}

const Card = (props: Props) => {
  const releaseDate = new Date(props.releaseDate);

  const handleOnClick = () => {
    // Call onClick function if it exists
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={props.imgURL || "https://placehold.co/200x200"}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="card-text">
          <p>{props.type}</p>
          <p>
            {releaseDate.toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>

        <Link
          to={props.buttonAction || "#"}
          className="btn btn-primary"
          onClick={handleOnClick}
        >
          {props.buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Card;
