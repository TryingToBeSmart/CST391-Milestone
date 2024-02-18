// import { useNavigate } from "react-router-dom";
import * as allMediaService from "../apiServices/allMediaService";
import { Media } from "../interfaces/Media";
import Card from "./Card";
import { useEffect, useState } from "react";

interface Props {
  searchQuery: string | null;
  buttonName?: string | null;
}

const MediaList = (props: Props) => {
  console.log("Props MediaList: ", props);
  //   const navigator = useNavigate();
  const [mediaList, setMediaList] = useState<Media[]>([]);
  const [selectedMediaId, setSelectedMediaId] = useState(0);

  // log the selectedMediaId every time it's changed
  useEffect(() => {
    console.log("Selected Id: ", selectedMediaId);
  }, [selectedMediaId]);

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    try {
      const response = await allMediaService.getAllMedia();
      setMediaList(response);
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  const handleMediaClick = (mediaId: number) => {
    setSelectedMediaId(mediaId);
  };

  const filteredMedia = props.searchQuery
    ? mediaList.filter((media) =>
        media.title.toLowerCase().includes(props.searchQuery!.toLowerCase())
      )
    : mediaList;

  const allMedia = filteredMedia.map((media: Media) => {
    return (
      <Card
        key={media.id}
        title={media.title}
        type={media.type}
        releaseDate={media.releaseDate}
        buttonText={props.buttonName || "Button"}
        imgURL={media.imgURL}
        onClick={() => handleMediaClick(media.id || 0)}
      />
    );
  });
  return (
    <>
      <div className="container">{allMedia}</div>
    </>
  );
};

export default MediaList;
