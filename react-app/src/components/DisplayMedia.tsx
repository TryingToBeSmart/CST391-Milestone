// import { useState } from "react";
import { useState } from "react";
import MediaList from "./MediaList";
import Search from "./Search";
import { Media } from "../interfaces/Media";

interface Props {
  buttonText?: string;
  onClick?: (media: Media) => void;
}

const DisplayMedia = (props?: Props) => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  const handleSearchSubmit = (query: string | null) => {
    setSearchQuery(query);
  };

  // If props.onClick exists then Pass the click event handler function to MediaList
  // Else handle it here in this DisplayMedia
  const handleOnClick = (media: Media) => {
    props?.onClick
      ? props.onClick(media)
      : console.log("DisplayMedia button clicked");
  };

  return (
    <>
      <Search onChange={handleSearchSubmit} />
      <MediaList
        searchQuery={searchQuery}
        buttonText={props?.buttonText}
        onClick={handleOnClick} // Pass the handleOnClick function to MediaList
      />
    </>
  );
};

export default DisplayMedia;
