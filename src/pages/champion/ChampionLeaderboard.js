import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Pagination from "../../components/Pagination";
import Leaderboard from "../../components/Leaderboard";
import LoadingSpinner from "../../components/LoadingSpinner";

const ChampionLeaderboard = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
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
      let championsData = res.data.results;

      championsData.map((champion, i) => {
        return (champion.rank = i + 1);
      });

      setChampions(championsData);
      setHasLoaded(true);
    };
    fetchChampions();
  }, []);

  return (
    <div>
      {hasLoaded ? (
        <Leaderboard champions={currentChampions} key={champions.id} />
      ) : (
        <LoadingSpinner></LoadingSpinner>
      )}
      <Pagination
        championsPerPage={championsPerPage}
        totalChampions={champions.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ChampionLeaderboard;
