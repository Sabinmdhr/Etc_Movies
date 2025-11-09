import MoviePlayer from "@/app/components/MoviePlayer";
import { getMovieVideos, getMovieDetails } from "@/app/servixes/api";

const MoviePage = async ({ params }) => {
  const { id } = params; // movie ID from URL

  // Fetch movie details
  const movie = await getMovieDetails(id);

  // Fetch movie videos
  const videos = await getMovieVideos(id);

  // Find YouTube trailer
  const trailer = videos.find(
    (vid) => vid.site === "YouTube" && vid.type === "Trailer"
  );

  // Safeguard if movie not found
  if (!movie) return <p>Movie not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>

      {trailer ? (
        <MoviePlayer trailerKey={trailer.key} />
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
};

export default MoviePage;
