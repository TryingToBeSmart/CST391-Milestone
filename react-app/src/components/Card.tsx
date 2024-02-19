import { Media } from "../interfaces/Media";

interface Props extends Media {
  buttonText?: string;
  onClick?: (media: Media) => void;
}

const Card = (props: Props) => {
  const releaseDate = new Date(props.releaseDate);

  const handleOnClick = () => {
    console.log(
      "Card: Selected media:",
      props.id,
      "Selected Title:",
      props.title
    );

    // Call onClick function if it exists
    if (props.onClick) {
      props.onClick(props);
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

        <button className="btn btn-primary" onClick={handleOnClick}>
          {props.buttonText || "Button"}
        </button>
      </div>
    </div>
  );
};

export default Card;
