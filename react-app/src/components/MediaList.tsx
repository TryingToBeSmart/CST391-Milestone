import * as allMediaService from "../apiServices/allMediaService"; // Import API service functions
import { Media } from "../interfaces/Media"; // Import Media interface
import Card from "./Card"; // Import Card component
import { useEffect, useState } from "react"; // Import useEffect and useState hooks

interface Props {
  searchQuery: string | null; // Search query string
  buttonText?: string; // Optional button name string
  onClick?: (media: Media) => void;
}

const MediaList = (props: Props) => {
  const [mediaList, setMediaList] = useState<Media[]>([]); // State to store media list

  // Load media data from the API
  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    try {
      const response = await allMediaService.getAllMedia(); // Fetch all media data
      setMediaList(response); // Update media list state with fetched data
    } catch (error) {
      console.error("Error fetching media:", error); // Log error if fetching media fails
    }
  };

  // Filter media based on search query if provided
  const filteredMedia = props.searchQuery
    ? mediaList.filter((media) =>
        media.title.toLowerCase().includes(props.searchQuery!.toLowerCase())
      )
    : mediaList;

  // Map filtered media data to Card components
  const allMedia = filteredMedia.map((media: Media) => {
    return (
      <Card
        key={media.id}
        id={media.id}
        title={media.title}
        type={media.type}
        releaseDate={media.releaseDate}
        buttonText={props.buttonText}
        imgURL={media.imgURL}
        onClick={props.onClick} // Pass the click event handler function to Card
      />
    );
  });

  // Render all media cards within a container
  return (
    <>
      <div className="container">{allMedia}</div>
    </>
  );
};

export default MediaList;
