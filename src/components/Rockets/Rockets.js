import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketCard from './RocketCard';
import { getRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  const rocketList = useSelector((state) => state.rockets.rockets);
  const newList = rocketList.map(({
    id, rocketName, description, flickrImages,
  }) => (
    <RocketCard
      id={id}
      key={id}
      rocketName={rocketName}
      description={description}
      flickrImages={flickrImages}
    />
  ));
  return (
    <div id="rocket-list">
      {newList}
    </div>
  );
};

export default Rockets;
