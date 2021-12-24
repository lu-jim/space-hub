import React from 'react';
import ReservedMissions from '../componentStyle/reservedMissions';
import ReservedRockets from './Rockets/ReservedRockets';

const Profile = () => (
  <main className="d-flex flex-container row justify-content-center my-4">
    <ReservedMissions />
    <ReservedRockets />
  </main>
);

export default Profile;
