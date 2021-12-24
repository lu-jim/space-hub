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
      <h2 className="mb-2"> My Rockets</h2>
      <ul className="row col-12 lg-col6 border m-2 p-2 rounded">
        {!!reservedList
          && reservedList.map(({ rocketId, rocketName, isBooked }) => (
            <li key={rocketId} className="d-flex justify-content-between border-bottom align-items-baseline pt-4">
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
