import axios from 'axios';

const GET_ROCKETS = 'rockets/GET_ROCKETS';
const TOGGLE_BOOKING = 'rockets/TOGGLE_BOOKING';
const url = 'https://api.spacexdata.com/v3/rockets/';

const initialState = { rockets: [] };

export const getRockets = () => async (dispatch) => {
  const result = await axios.get(url);
  const rockets = result.data;
  const rocketList = rockets.map((rocket) => ({
    rocketId: rocket.id,
    rocketName: rocket.rocket_name,
    description: rocket.description,
    flickrImages: rocket.flickr_images,
    wikipedia: rocket.wikipedia,
  }));
  dispatch({
    type: GET_ROCKETS,
    payload: rocketList,
  });
};

export const bookRocket = (payload) => ({
  type: TOGGLE_BOOKING,
  payload,
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ROCKETS:
      return { ...state, rockets: payload };
    case TOGGLE_BOOKING:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => (rocket.rocketId !== payload ? rocket : {
          ...rocket, isBooked: !rocket.isBooked,
        })),
      };
    default:
      return state;
  }
};

export default reducer;
