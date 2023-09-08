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

const songReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_SONG_DATA":
      return action.payload;
    default:
      return state;
  }
};

const searchTerm = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  artistData: artistReducer,
  albumData: albumReducer,
  musicData: musicReducer,
  songReducer: songReducer,
  searchTerm: searchTerm,
});

// Store

export default rootReducer;
