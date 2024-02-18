import React, { FormEvent, useState } from "react";

interface Props {
  onChange: (query: string | null) => void;
}

export default function Search(props: Props) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    console.log(`You are searching for '${event.target.value}'`);
    props.onChange(event.target.value);
    event.preventDefault();
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <form className="form-group p-2" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Enter search here"
            aria-describedby="search-button"
            value={query}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </form>
  );
}
