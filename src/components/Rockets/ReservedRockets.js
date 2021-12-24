import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookRocket } from '../../redux/rockets/rockets';
import BookButton from './BookButton';

const ReservedRockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedList = rockets.filter((rocket) => rocket.isBooked);
  const dispatch = useDispatch();
  const reserveRocket = (rocket) => {
    dispatch(bookRocket(rocket));
  };

  return (
    <section>
      <ul>
        {!!reservedList
          && reservedList.map(({ rocketId, rocketName, isBooked }) => (
            <li key={rocketId}>
              <h3>
                {rocketName}
              </h3>
              <p>
                <BookButton
                  isBooked={isBooked}
                  rocketId={rocketId}
                  onClickEvent={(rocketId) => reserveRocket(rocketId)}
                />
              </p>
            </li>
          ))}
        {!reservedList.length && (
          <p>
            No reserved rockets
          </p>
        )}
      </ul>
    </section>
  );
};

export default ReservedRockets;
