import React from "react";
import RoleIcon from "../../components/RoleIcon";
import SupportIcon from "../../assets/support.png";
import AdcIcon from "../../assets/adc.png";
import JungleIcon from "../../assets/jungle.png";
import TopIcon from "../../assets/top.png";
import MiddleIcon from "../../assets/middle.png";
import styles from "../../styles/ChampionSelect.module.css";
import ChampionCard from "../../components/ChampionCard";
import AatroxImage from "../../assets/Aatrox.jpg";

const ChampionSelect = () => {
  const RoleIcons = (
    <>
      <RoleIcon src={SupportIcon} height={50}></RoleIcon>
      <RoleIcon src={AdcIcon} height={50}></RoleIcon>
      <RoleIcon src={JungleIcon} height={50}></RoleIcon>
      <RoleIcon src={TopIcon} height={50}></RoleIcon>
      <RoleIcon src={MiddleIcon} height={50}></RoleIcon>
    </>
  );
  return (
    <div className={styles.RoleIconSection}>
      <div>
        {RoleIcons}
        <ChampionCard imgsrc={AatroxImage} champName="Aatrox"></ChampionCard>
      </div>
    </div>
  );
};

export default ChampionSelect;
