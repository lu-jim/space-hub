import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketCard from './RocketCard';
import { getRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketList = useSelector((state) => state.rockets.rockets);
  useEffect(() => {
    if (!rocketList.length) dispatch(getRockets());
  }, []);
  return (
    <div id="rocket-list">
      {rocketList.map(({
        id, rocketName, description, flickrImages, booked,
      }) => (
        <RocketCard
          id={id}
          key={id}
          rocketName={rocketName}
          description={description}
          flickrImages={flickrImages}
          booked={booked}
        />
      ))}
    </div>
  );
};

export default Rockets;
