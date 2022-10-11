export const SearchBox = ({ searchName, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="movie"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        // value={searchName}
      />
      <button type="submit">Search</button>
    </form>
  );
};
