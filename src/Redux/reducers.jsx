import { combineReducers } from "redux";

// Reducers
const artistReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ARTIST_DATA":
      return action.payload;
    default:
      return state;
  }
};

const albumReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ALBUM_DATA":
      return action.payload;
    default:
      return state;
  }
};

const musicReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MUSIC_DATA":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  artistData: artistReducer,
  albumData: albumReducer,
  musicData: musicReducer,
});

// Store

export default rootReducer;
