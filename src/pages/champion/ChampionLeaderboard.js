import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import Aatrox from "../../assets/Aatrox.jpg";
import { Card, Container } from "react-bootstrap";

const ChampionLeaderboard = () => {
  const [champions, setChampions] = useState({ results: [] });

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const { data } = await axiosReq.get(`/champions/`);
        setChampions(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChampions();
  }, []);

  console.log(champions);
  return (
    <Container className="mt-5 d-flex flex-wrap">
      <Card className="d-block">
        <Avatar src={Aatrox}></Avatar>
        <span>Aatrox</span>
        <span>The Darkin Blade</span>
        <span>30</span>
      </Card>
      <Card className="d-block">
        <Avatar src={Aatrox}></Avatar>
        <span>Aatrox</span>
        <span>The Darkin Blade</span>
        <span>30</span>
      </Card>
    </Container>
  );
};

export default ChampionLeaderboard;
