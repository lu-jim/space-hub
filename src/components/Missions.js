import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMissions } from '../redux/missions/missions'

export const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch()

  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions())
  }, [])


  return (
    <main className='main'>
      <table className='missions-table'>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Descriptions</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => {
            const colorClass = index % 2 === 0 ? 'grey-bg' : 'white-bg';
            return (
              <tr key={mission.mission_id} className={colorClass}>
                <th className='mission-title'>{mission.mission_name}</th>
                <td>{mission.description}</td>
                <td cla></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </main>
  )
}
