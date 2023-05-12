import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        let filteredLists = res.data;
        const movies = res.data.map((list) => list.content);
        console.log(movies); // working on fetching movies!!
        // Apply search filter
        if (searchValue) {
          filteredLists = filteredLists.filter((list) =>
            list.title.toLowerCase().includes(searchValue.toLowerCase())
          );
        }
  
        setLists(filteredLists);
      } catch (err) {
        console.log(err);
      }
    };
  
    getRandomLists();
  }, [type, genre, searchValue]);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="home">
      <Navbar onSearch={handleSearch} />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        //console.log(list)
        <List list={list} />
      ))}
    </div>
  );
};
export default Home;