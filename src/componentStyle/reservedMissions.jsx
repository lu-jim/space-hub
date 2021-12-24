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
          <li key={mission.mission_id}>
            <h3 className="filtered-list__list__item__title">
              {mission.mission_name}
            </h3>
          </li>
        ))}
        {!reservedMissions.length && (
          <p className="filtered-list__list__item">
            No reserved missions
          </p>
        )}

      </ul>
    </section>
  )
}

export default ReservedMissions