import { useState } from "react";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import CategoryGrid from "@/sections/CategoryGrid";
import Operators from "@/sections/Operators";
import Weapons from "@/sections/Weapons";
import { Lore, News, Footer } from "@/sections/Sections";

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <div className="min-h-screen">
      <Header query={query} setQuery={setQuery} />
      <Hero />
      <CategoryGrid />
      <Operators query={query} />
      <Weapons query={query} />
      <Lore />
      <News />
      <Footer />
    </div>
  );
}
