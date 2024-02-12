interface Props {
  onSubmit: (query: string | null) => void;
}

export default function Search(props: Props) {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("query") as string;
    console.log(`You searched for '${query}'`);
    props.onSubmit(query);
  };

  return (
    <form onSubmit={handleFormSubmit} className="form-group row g-3 mt-2">
      <div className="row">
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Enter search here"
            aria-describedby="search-button"
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-outline-primary"
            type="submit"
            id="search-button"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
