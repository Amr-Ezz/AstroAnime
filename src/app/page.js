"use client";
import styles from "./page.module.css";
import Search from "@/components/Search/Search";
import AnimeCards from "@/components/AnimeCards/AnimeCards";
import { useState } from "react";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (term) => {
    setSearchTerm(term);
  }
  return (
    <div className={styles.container}>
      <div className={styles.anime}>
        <div className={styles.anime_image}>
          {/* <img src="astroanime-logo.png" alt="background" /> */}
          {/* <div className={styles.gradient} /> */}
        </div>
        <div className={styles.hero}>
          <h1 className={styles.hero_heading}> Search your favourite anime</h1>
          <p className={styles.japanese}>あなたのアニメを検索</p>
         <div className={styles.search_input}>
           <Search onSearch={handleSearch} />
           </div>
        </div>
      </div>
      <div className={styles.animeCards}>
        <AnimeCards searchTerm={searchTerm} />
      </div>
      <div className={styles.footer}>
        <Footer />
        
      </div>
     
    </div>
  );
}
