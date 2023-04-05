import React from "react";
import Image from "next/image";
import Link from "next/link";
import IMovie from "@/utils/interface";

interface IMovies {
  movies: IMovie[];
}
export default function MovieCard({ movies }: IMovies) {
  return (
    <>
      <div className="bg-white grid grid-cols-4 gap-4 p-4">
        {movies.length > 0 &&
          movies.map((movie: IMovie) => (
            <div className="group bg-orange-300 " key={movie._id}>
              <div className="aspect-[9/12] relative group">
                <Image
                  src={movie.poster || ""}
                  width={100}
                  height={100}
                  alt="moviePoster"
                  className="w-full h-full object-cover rounded"
                />
                <div className="absolute inset-0 group-hover:bg-black/30 transition-all" />
              </div>
              <Link className="text-black-400" href={`movies/${movie._id}`}>
                {movie.title}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8009/movies");
  const data = await res.json();
  return {
    props: { movies: data.movies },
  };
}
