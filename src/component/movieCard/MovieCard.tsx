import React from "react";
import Image from "next/image";
import Link from "next/link";
import IMovie from "@/utils/interface";



export default function MovieCard({ movie }) {
    return (
        <>
            <div className="group  rounded-xl w-70 bg-gray-500 m-4 " key={movie._id}>
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
                <div className="mx-3 text-white ">
                    <h2 className="text-lg font-bold">Rating: {movie.imdb.rating}</h2>

                    <Link className="text-2xl" href={`movies/${movie._id}`}>
                        {movie.title}
                    </Link>
                </div>
            </div>
        </>
    );
}

