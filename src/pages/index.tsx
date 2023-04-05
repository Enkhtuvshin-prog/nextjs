import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import MovieCard from "./movies/[movie]";
import Pagination from "../component/pagination";
import IMovie from "@/utils/interface";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" min-h-screen">
        <div className="container mx-auto">
          <h1 className="font-bold text-black text-3xl">Movies List</h1>

          <Pagination />
        </div>
      </div>
    </>
  );
}
