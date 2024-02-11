// import { useNavigate } from "react-router-dom";
import { getAllMedia } from "../apiServices/allMediaService";
import { Media } from "../interfaces/Media";
import Card from "./Card";
import { useEffect, useState } from "react";

// interface Props extends Media {
//   onClick(mediaId: number, navigator: NavigateFunction): unknown;
//   buttonText: string;
//   buttonAction?: string;
// }

const MediaList = () => {
  //   console.log("Props MediaList: ", props);
  //   const navigator = useNavigate();
  const [mediaList, setMediaList] = useState([]);
  //   const [currentlySelectedMediaId, setCurrentlySelectedMediaId] = useState(0);

  // eslint-disable-next-line prefer-const
  let refresh = false;

  useEffect(() => {
    loadMedia();
  }, [refresh]);

  const loadMedia = async () => {
    try {
      const response = await getAllMedia();
      setMediaList(response);
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  //   const handleSelection = (mediaId: number) => {
  //     console.log("Selected Id: ", mediaId);
  //     props.onClick(mediaId, navigator);
  //   };

  const allMedia = mediaList.map((media: Media) => {
    return (
      <Card
        key={media.id}
        title={media.title}
        type={media.type}
        releaseDate={media.releaseDate}
        buttonText="button"
        imgURL={media.imgURL}
        // onClick={handleSelection}
      />
    );
  });

  return <div className="container">{allMedia}</div>;
};

export default MediaList;
