export const Movies = () => {
  return (
    <main>
      <h1>Movies</h1>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          // value={searchName}
        />
        <button type="submit">Search</button>
      </form>
    </main>
  );
};
