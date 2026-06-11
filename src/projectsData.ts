export interface CustomProjectMedia {
  image: string;
  videoUrl: string;
}

export const projectsMedia: Record<string, CustomProjectMedia> = {
  "nome-do-repositorio-1": {
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b", // Imagem do card estático
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" // Substitua pelo link do seu vídeo (ex: hospedado no Cloudinary, Vercel Blob, etc.)
  },
  "nome-do-repositorio-2": {
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    videoUrl: "https://www.w3schools.com/html/movie.mp4"
  }
};