import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMissions } from '../redux/missions/missions'

export const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch()

  useEffect(() => {
    if (!missions.length) dispaatch(fetchMissions())
  }, [])
  return (
    <div>
      <p>work </p>
    </div>
  )
}
