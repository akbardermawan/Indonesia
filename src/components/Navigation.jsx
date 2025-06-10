import React from "react";

const Navigation = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-10">
      <h6 className="border-b-2 border-solid m-2"> Daftar Isi</h6>
      <ul>
        <li>
          <a href="#cover">Cover</a>
        </li>
        <li>
          <a href="#opening">Pembukaan</a>
        </li>
        <li>
          <a href="#1">BAB I</a>
        </li>
        <li>
          <a href="#2">BAB II</a>
        </li>
        <li>
          <a href="#3">BAB III</a>
        </li>
        <li>
          <a href="#4">BAB IV</a>
        </li>
        <li>
          <a href="#conclusion">Kesimpulan</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
