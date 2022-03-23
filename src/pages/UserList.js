import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const UserList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=80f2cf66f7aa38baba8bfc7c4cfb00ec&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coup de coeur <span>💖</span>
      </h2>
      <div className="result">
        {listData.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
