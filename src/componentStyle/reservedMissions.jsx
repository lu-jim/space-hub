import React from "react";
import { useSelector } from "react-redux";
import Button from './Button.style'

const ReservedMissions = () => {
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  const dispatch = useDispatch();

  const handleMissionReservation = (id) => {
    dispatch(toggleMissionReservation(id));
  };

  return (
    <section className="filtered-list">
      <h2 className="filtered-list__title">My Missions</h2>
      <ul className="filtered-list__list">
        {!!reservedMissions
          && reservedMissions.map((mission) => (
            <li className="filtered-list__list__item" key={mission.mission_id}>
              <h3 className="filtered-list__list__item__title">
                {mission.mission_name}
              </h3>
              <Link to={mission.link} />
              <Button
                isMissionJoined={mission.reserved}
                onClick={() => handleMissionReservation(mission.mission_id)}
              />
            </li>
          ))}
        {!reservedMissions.length && (
          <p className="filtered-list__list__item">
            There are no reserved missions
          </p>
        )}
      </ul>
    </section>
  );
};

export default ReservedMissions