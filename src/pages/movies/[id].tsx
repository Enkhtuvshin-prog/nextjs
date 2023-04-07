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
    <div className="bg-blue-400 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 p-5 bg-white rounded-lg">
          <div className="group">
            <Image src={movie.poster} width={300} height={200} alt="poster" />
          </div>
          <div className="px-3" >
              <h1 className="text-violet-700 text-4xl"> {movie.title}</h1>
              <p className="text-bold">
              <span className="text-black font-medium text-lg">Year</span> :{movie.year} 
              </p>
              <p><span className="text-black font-medium text-lg">description:</span>   {movie.plot}</p> 
         </div>

        </div>
      </div>
    </div>
  );
};

export async  function getServerSideProps({ query }: any) {
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