// import { useState } from "react";
import { useState } from "react";
import MediaList from "./MediaList";
import Search from "./Search";

const DisplayMedia = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  const handleSearchSubmit = (query: string | null) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Search onSubmit={handleSearchSubmit} />
      <MediaList searchQuery={searchQuery} />;
    </>
  );
};

export default DisplayMedia;
