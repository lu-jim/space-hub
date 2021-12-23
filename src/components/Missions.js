import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Badge from '../componentStyle/Badge.style';
import Button from '../componentStyle/Button.style';
import { fetchMissions, toggleMissionReservation } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, []);

  const handleMissionReservation = (id) => {
    dispatch(toggleMissionReservation(id));
  };

  return (
    <main className="main">
      <table className="missions-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th className="status-col">Status</th>
            <th className="join-col">Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => {
            const colorClass = index % 2 === 0 ? 'grey-bg' : 'white-bg';
            return (
              <tr key={mission.mission_id} className={colorClass}>
                <td className="mission-title">{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td className="mission-status">
                  <Badge
                    text={mission.reserved ? 'active member' : 'NOT A MEMBER'}
                    isActive={mission.reserved}
                  />
                </td>
                <td className="mission-join">
                  <Button
                    isMissionJoined={mission.reserved}
                    onClick={() => handleMissionReservation(mission.mission_id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default Missions;
