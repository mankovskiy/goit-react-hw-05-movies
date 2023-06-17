import { Input } from './SearchBox.styled';

export const SearchBox = ({ value, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        name="movie"
        type="text"
        // autoComplete="off"
        // autoFocus
        placeholder="Search movies"
        defaultValue={value}
      />
      <button type="submit">Search</button>
    </form>
  );
};
