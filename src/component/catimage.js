import React from "react";
import { useState, useEffect } from "react";
import Select from "react-select";
import "./Cat.css";

const Catimage = () => {
  const [breed, getBreed] = useState([{}]);
  const [image, getImage] = useState([{}]);

  useEffect(() => {
    const Breeds = async () => {
      const api = await fetch("https://api.thecatapi.com/v1/breeds");
      const getApi = await api.json();
      const result = getApi.map((data) => {
        return {
          value: data.id,
          label: data.name,
        };
      });

      getBreed(result);
    };
    Breeds();
  }, []);
  // const handleChange = (e) => {
  //   breed(e.target.value);
  // };

  const getImages = async () => {
    const api = await fetch(
      "https://api.thecatapi.com/v1/images/search?breed_ids=",
      breed.value
    );
    const getApi = await api.json();
    const result = getApi.map((e) => {
      return {
        id: e.id,
        img: e.url,
      };
    });

    getImage(result);
  };

  return (
    <div>
      <Select
        onChange={getImages}
        key={breed.value}
        value={breed.value}
        options={breed}
      />

      <div className="container center">
        <div className="card">
          <hr />
          <img alt="gambar" key={image.id} src={image[0].img} />
        </div>
      </div>
    </div>
  );
};

export default Catimage;
