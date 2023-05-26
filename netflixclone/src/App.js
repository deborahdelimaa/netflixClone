import React from "react";
import { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow.js";

export default () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      // get
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);

  return <div className="page">
<section className="lists"/>
{movieList.map((item, key) => (
  <div>
    {item.title}
  </div>
))}
  </div>;
};
