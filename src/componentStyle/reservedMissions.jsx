import React from "react";
import { useSelector } from "react-redux";

const ReservedMissions = () => {
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => missions.reserved)
  
  return (
    <section className="filtered-list">
      <h2 className="filtered-list__title">My Missions</h2>
      <ul className="filtered-list__list">
        {!!reservedMissions && reservedMissions.map((mission) => (
          <li>
            <h3 className="filtered-list__list__item__title" key={mission.mission_id}>
              {mission.mission_name}
            </h3>
          </li>
        ))}

      </ul>
    </section>
  )
}