import axios from 'axios';

const GET_ROCKETS = 'rockets/GET_ROCKETS';
const BOOK_ROCKET = 'rockets/BOOK_ROCKET';
const url = 'https://api.spacexdata.com/v3/rockets/';

const initialState = { rockets: [] };

export const getRockets = () => async (dispatch) => {
  const result = await axios.get(url);
  const rockets = result.data;
  const rocketList = rockets.map((rocket) => ({
    id: rocket.id,
    rocketName: rocket.rocket_name,
    description: rocket.description,
    flickrImages: rocket.flickr_images,
  }));
  dispatch({
    type: GET_ROCKETS,
    payload: rocketList,
  });
};

export const bookRocket = (state = initialState, id) => {
  const bookedRockets = state.map((rocket) => {
    if (rocket.id !== id) return rocket;
    return { ...rocket, reserved: true };
  });
  return {
    type: BOOK_ROCKET,
    payload: bookedRockets,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return { ...state, rockets: action.payload };
    case BOOK_ROCKET:
      return { ...state, rockets: action.payload };
    default:
      return state;
  }
};

export default reducer;
