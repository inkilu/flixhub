import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
export default function Featured({ type, setGenre,searchQuery }) {
  const [content, setContent] = useState({});
  const getRandomContent = async () => {
    try {
      if (searchQuery) {
        // Fetch search results based on the search query
        const res = await axios.get(`/movies/search?query=${searchQuery}`, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data);
      } 
      else {
        // Fetch random content based on the type prop
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        console.log(res.data)
        setContent(res.data[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getRandomContent();
  }, [type, searchQuery, setGenre]);
  return (
    <div className="featured1">
      {type && (
        <div className="category1">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
        <Link to={{ pathname: "/watch",movie:content}}>
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
