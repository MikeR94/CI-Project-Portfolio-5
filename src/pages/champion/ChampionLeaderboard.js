import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Pagination from "../../components/Pagination";
import Leaderboard from "../../components/Leaderboard";

const ChampionLeaderboard = () => {
  const [champions, setChampions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [championsPerPage] = useState(3);
  const indexOfLastChampion = currentPage * championsPerPage;
  const indexOfFirstChampion = indexOfLastChampion - championsPerPage;
  const currentChampions = champions.slice(
    indexOfFirstChampion,
    indexOfLastChampion
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchChampions = async () => {
      const res = await axiosReq.get("/champions/leaderboard");
      setChampions(res.data.results);
    };
    fetchChampions();
  }, []);

  return (
    <div>
      <Leaderboard champions={currentChampions} key={champions.id} />
      <Pagination
        championsPerPage={championsPerPage}
        totalChampions={champions.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ChampionLeaderboard;
