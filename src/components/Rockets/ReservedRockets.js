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
    <section className="col-5">
      <h2 className="py-2"> My Rockets</h2>
      <ul className="row col-12 lg-col-5 border m-2 py-2 rounded">
        {!!reservedList
          && reservedList.map(({ rocketId, rocketName, isBooked }) => (
            <li key={rocketId} className="d-flex justify-content-between border-bottom align-items-baseline pt-4 col-12">
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
          <h4 className="p-4 text-center text-danger">
            No reserved rockets.  Go to the Rockets page to book one.
          </h4>
        )}
      </ul>
    </section>
  );
};

export default ReservedRockets;
