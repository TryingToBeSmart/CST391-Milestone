export interface Media {
  id?: number; // Auto-incremented by MySQL
  title: string;
  type: "Movie" | "Series"; // Only 'Movie' or 'Series' allowed
  releaseDate: string;
  imgURL?: string;
}
