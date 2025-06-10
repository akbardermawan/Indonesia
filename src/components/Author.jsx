import React from "react";

const Author = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[80%]  rounded-full">
          <img src="/logo.png" alt="" />
        </div>
      </div>
      <div className="m-5">
        <ul>
          <li>Name: Akbar Dermawan</li>
          <li>Old: 27</li>
        </ul>
      </div>
      <div>
        <h6 className="text-center">Latar Belakang Penulis</h6>
        <p className="text-justify p-3 text-sm">
          Penulis adalah seorang warga negara Indonesi yang hidup di lingkungan
          pedesaan. Penulis kurang memiliki pengetahuan kuhususnya di
          bidang-bidang yang ditulis. Penulis menulis karya ini karena banyak
          waktu luang, untuk mengisi waktu luang tersebut akhirnya penulis
          membuat karya ini.
        </p>
      </div>
    </div>
  );
};

export default Author;
