import React from "react";
import "./Cat.css";
import { useEffect, useState } from "react";

const Cat = () => {
  const [images, getImages] = useState([{}]);

  const Api = async () => {
    const dee = await fetch("https://api.thecatapi.com/v1/images/search");
    const deeApi = await dee.json();
    const result = deeApi.map((data) => {
      return {
        id: data.id,
        url: data.url,
      };
    });

    console.log(result);
    getImages(result);
  };

  useEffect(() => {
    Api();
  }, []);

  return (
    <div>
      <div class="container center">
        <div class="card">
          <h2>Random Cat Images</h2>
          <hr />
          <img key={images.id} alt="gambar" src={images[0].url} />
          <button onClick={Api}>Get Random Cat Images</button>
        </div>
      </div>
    </div>
  );
};

export default Cat;
