import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from './Button.style';
import Link from './Link.style';
import { toggleMissionReservation } from '../redux/missions/missions';

const ReservedMissions = () => {
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  const dispatch = useDispatch();

  const handleMissionReservation = (id) => {
    dispatch(toggleMissionReservation(id));
  };

  return (
    <section className="col-12 col-lg-5">
      <h2 className="py-2">My Missions</h2>
      <ul className="row col-12 lg-col-5 border m-2 py-2 rounded">
        {!!reservedMissions
          && reservedMissions.map((mission) => (
            <li className="d-flex justify-content-between border-bottom align-items-baseline pt-4 col-12" key={mission.mission_id}>
              <h3>
                {mission.mission_name}
              </h3>
              <p className="d-flex flex-column flex-md-row ">
                <Link to={mission.link} />
                <Button
                  isMissionJoined={mission.reserved}
                  onClick={() => handleMissionReservation(mission.mission_id)}
                />
              </p>
            </li>
          ))}
        {!reservedMissions.length && (
          <h4 className="p-4 text-center text-danger">
            No reserved missions. Go to the Missions page to join one.
          </h4>
        )}
      </ul>
    </section>
  );
};

export default ReservedMissions;
