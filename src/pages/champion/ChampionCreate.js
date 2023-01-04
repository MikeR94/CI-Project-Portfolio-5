import React from "react";
import { useRedirect } from "../../hooks/useRedirect";

function ChampionCreate() {
  useRedirect("loggedOut");

  return <div className="mt-5">This is the champion create page</div>;
}

export default ChampionCreate;
