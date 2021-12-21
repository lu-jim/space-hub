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
        tb
      </table>
    </main>
  )
}
