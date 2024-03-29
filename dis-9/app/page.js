"use client";
import Image from "next/image";
import styles from "./page.module.css";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [city, setCity] = useState("");

  return (
      <main>
        <h1>Find the weather in any city!</h1>
        <p>Enter a city name below to get the current weather.</p>
        <input type="text" value={city} placeholder="City name" onChange={(e) => setCity(e.target.value)} />
        <Link href={`/${city}`}>Get Weather</Link>
      </main>
  );
}
