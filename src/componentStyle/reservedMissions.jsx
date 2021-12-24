import React from "react";
import { useSelector } from "react-redux";

const ReservedMissions = () => {
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) =>missions.reserved)
}