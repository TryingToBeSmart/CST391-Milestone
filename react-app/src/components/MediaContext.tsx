import React, { createContext, useState } from "react";
import * as allMediaService from "../apiServices/allMediaService";
import { Media } from "../interfaces/Media";

interface MediaContextType {
  mediaData: Media[] | null;
  setMediaData: React.Dispatch<React.SetStateAction<Media[] | null>>;
  loadMedia: () => Promise<void>;
}

const MediaContext = createContext<MediaContextType>({
  mediaData: null,
  setMediaData: () => {},
  loadMedia: async () => {},
});

const MediaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mediaData, setMediaData] = useState<Media[] | null>(null);

  const loadMedia = async () => {
    try {
      const response = await allMediaService.getAllMedia();
      setMediaData(response);
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  return (
    <MediaContext.Provider value={{ mediaData, setMediaData, loadMedia }}>
      {children}
    </MediaContext.Provider>
  );
};

export { MediaContext, MediaProvider };
