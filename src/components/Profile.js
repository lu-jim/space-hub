import React from 'react';
import ReservedMissions from '../componentStyle/reservedMissions';
import ReservedRockets from './Rockets/ReservedRockets';

const Profile = () => (
  <main className="d-flex">
    <ReservedMissions />
    <ReservedRockets />
  </main>
);

export default Profile;
