import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IMovie } from "@/utils/interface";

export default function MovieCard({ movie }: { movie: IMovie }) {
  return (
    <>
      <div className="group  rounded-xl w-70 bg-white m-4 " key={movie._id}>
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
        <div className="mx-3">
          {/* <p className="text-lg font-bold">Rating: {movie.imdb.rating}</p> */}
          <Link className="text-2xl" href={`movies/${movie._id}`}>
            {movie.title}
          </Link>
        </div>
      </div>
    </>
  );
}
