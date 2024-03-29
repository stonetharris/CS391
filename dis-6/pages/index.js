import Head from "next/head";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import useSWR from 'swr';
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const {data, error} = useSWR('https://rickandmortyapi.com/api/character',
        (url) =>
            fetch(url)
                .then(
                    (res) =>
                        res.json()
                )
    );
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
        <>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={`${styles.main} ${inter.className}`}>
              {
                  data.results.map((obj) =>
                      (
                          <div key={obj.id}>
                              <h1>{obj.name}</h1>
                              <Image
                              src = {obj.image}
                              alt = "Rick and Morty"
                              width = {250}
                              height = {250}
                              />
                          </div>
                      ))
              }

          </main>
        </>
      );
}
