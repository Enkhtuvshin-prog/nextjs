import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

interface IProps {
  params: [];
}

const Movie = ({ movie }: any) => {
  const router = useRouter();
  // console.log("mm=======>", movie);

  if (router.isFallback) {
    return <div>Уншиж байна ...</div>;
  }

  return (
    <div className="bg-slate-950 h-screen ">
      <div className="container m-auto">
        <div className="grid grid-cols-2 text-white p-5 rounded-lg">
          <div>
            <Image src={movie.poster} width={300} height={200} alt="poster" />
          </div>
          <div className="bg-slate-600 p-5">
            <h1 className=" text-4xl"> {movie.title}</h1>
            <div className="flex flex-1 justify-between">
              <p className="text-bold text-2xl my-2">
                <span>Year</span>: {movie.year}
              </p>
              <div className="w-10 h-10 text-black text-xl rounded-tr-xl rounded-bl-xl border-zinc-50 border-solid bg-yellow-400 text-center py-2" >{movie.imdb.rating}</div>
            </div>
            <p><span className=" font-medium text-lg">Country: </span>   {movie.countries}</p>
            <p><span className=" font-medium text-lg">Type: </span>   {movie.type}</p>
            <p><span className=" font-medium text-lg">Directors: </span>   {movie.directors[0]}</p>
            <p><span className=" font-medium text-lg">Writers: </span>   {movie.writers}</p>
            <p><span className=" font-medium text-lg">description: </span>   {movie.plot}</p>

          </div>

        </div>
      </div>
    </div> 
  );
};

export async function getServerSideProps({ query }: any) {
  const res = await fetch(`http://localhost:8009/movies/${query.id}`);
  const data = await res.json();

  return {
    props: { movie: data.movie },
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }: any) {
//   console.log("params", params);
//   const res = await fetch(`http://localhost:8000/movies/${params.id}`);
//   const data = await res.json();

//   return {
//     props: { movie: data.movie },
//   };
// }

export default Movie;