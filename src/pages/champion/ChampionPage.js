import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

const ChampionPage = () => {
  const { id } = useParams();
  const [champData, setChampData] = useState({ name: "", alias: "" });
  const { name, alias } = champData;

  useEffect(() => {
    const fetchChampion = async () => {
      try {
        const { data } = await axiosReq.get(`/champions/${id}`);
        const { name, alias } = data;
        setChampData(() => ({
          name: name,
          alias: alias,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    fetchChampion();
  }, []);

  console.log(name);

  return (
    <div>
      <h1>Champion Page</h1>
      {name}
      {alias}
    </div>
  );
};

export default ChampionPage;
