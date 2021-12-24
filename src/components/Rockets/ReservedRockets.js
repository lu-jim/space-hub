import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bookRocket } from '../../redux/rockets/rockets';
import BookButton from './BookButton';
import Link from '../../componentStyle/Link.style';

const ReservedRockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedList = rockets.filter((rocket) => rocket.isBooked);
  const dispatch = useDispatch();
  const reserveRocket = (rocket) => {
    dispatch(bookRocket(rocket));
  };

  return (
    <section className="col-12 col-lg-5">
      <h2 className="p-2"> My Rockets</h2>
      <ul className="row col-12 lg-col-5 border m-2 py-2 px-0 rounded">
        {!!reservedList
          && reservedList.map(({
            rocketId, rocketName, flickrImages, isBooked, wikipedia,
          }) => (
            <li key={rocketId} className="d-flex justify-content-between border-bottom align-items-center py-3 col-12">
              <div className="d-flex align-items-center">
                <img
                  src={flickrImages[0]}
                  alt={rocketName}
                  className="img-fluid border rounded-pill me-3"
                  width="75"
                  height="75"
                />
                <h3>
                  {rocketName}
                </h3>
              </div>
              <p className="d-flex flex-column flex-lg-row me-1 me-xl-3">
                <Link to={wikipedia} />
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
