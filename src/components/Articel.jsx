import React, { useEffect } from "react";
import Cover from "./Cover";
import Opening from "./Opening";
import Bab1 from "./Bab1";
import Bab2 from "./Bab2";
import Bab3 from "./Bab3";
import Bab4 from "./Bab4";
import Conclusion from "./Conclusion";

const Articel = ({ darkMode, setDarkMode, fontSize, setFontSize }) => {
  useEffect(() => {
    // Aksi yang dijalankan setiap kali fontSize berubah
    console.log("Ukuran font diperbarui:", fontSize);

    // Contoh: Fetch data, log analytics, atau update UI lain di sini
  }, [fontSize]);
  return (
    <div className="w-full">
      <section id="cover" className="w-full ">
        <Cover />
      </section>
      <section id="opening" className="w-full ">
        <Opening />
      </section>
      <section id="1" className="w-full">
        <Bab1 />
      </section>
      <section id="2" className="w-full ">
        <Bab2 />
      </section>
      <section id="3" className="w-full ">
        <Bab3 />
      </section>
      <section id="4" className="w-full ">
        <Bab4 />
      </section>
      <section id="conclusion" className="w-full ">
        <Conclusion />
      </section>
    </div>
  );
};

export default Articel;
