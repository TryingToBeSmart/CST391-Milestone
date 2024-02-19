import React, { FormEvent, useState } from "react";

interface Props {
  onChange: (query: string | null) => void; // Function to handle search query change
}

export default function Search(props: Props) {
  const [query, setQuery] = useState(""); // State to store search query

  // Handle input change event
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value); // Update search query state with input value
    console.log(`You are searching for '${event.target.value}'`); // Log search query
    props.onChange(event.target.value); // Call parent component's onChange function with search query
    event.preventDefault(); // Prevent default form submission behavior
  };

  // Handle form submission event
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault(); // Prevent default form submission behavior
  }

  // Render search form
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
