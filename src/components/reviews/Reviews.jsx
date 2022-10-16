import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/fetchMovie';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <section>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
            {/* <Link to={`/movies/${id}`}>{title}</Link> */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
// export const Cast = () => {
//   const { movieId } = useParams();

//   const [casts, setCasts] = useState(null);
//   console.log(casts);
//   useEffect(() => {
//     fetchMovieCast(movieId).then(setCasts);
//   }, [movieId]);

//   if (!casts) {
//     return null;
//   }

//   return (
//     <section>
//       <ul>
//         {casts.map(({ id, name, profile_path, character }) => (
//           <li key={id}>
//             <img
//               src={`https://image.tmdb.org/t/p/w500${profile_path}`}
//               alt=""
//             />
//             <p>{name}</p>
//             <p>Character: {character}</p>
//             {/* <Link to={`/movies/${id}`}>{title}</Link> */}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };
