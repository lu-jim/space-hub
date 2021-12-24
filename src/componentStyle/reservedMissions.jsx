import React from "react";
import { useSelector,useDispatch } from "react-redux";
import Button from './Button.style'
import Link from "./Link.style";
import { toggleMissionReservation } from '../redux/missions/missions'

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
      <ul className="mission-holder">
        {!!reservedMissions
          && reservedMissions.map((mission) => (
            <li className="list-item" key={mission.mission_id}>
              <h3 className="filtered-list__list__item__title">
                {mission.mission_name}
              </h3>
              <p className="mission-item">
              <Link to={mission.link} />
              <Button
                isMissionJoined={mission.reserved}
                onClick={() => handleMissionReservation(mission.mission_id)}
                />
              </p>
            </li>
          ))}
        {!reservedMissions.length && (
          <p className="filtered-list__list__item">
            no reserved missions
          </p>
        )}
      </ul>
    </section>
  );
};

export default ReservedMissions
