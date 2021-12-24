import React from "react";
import { useSelector } from "react-redux";

const ReservedMissions = () => {
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => missions.reserved)
  
  return (
    <section>
      <h2 className="filtered-list">My Missions</h2>
    </section>
  )
}