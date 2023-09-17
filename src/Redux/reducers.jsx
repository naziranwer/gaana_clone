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

const favouriteSongs = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAV":
      return [...state, action.payload];
    case "REMOVE_FAV":
      return state.filter((song) => song._id !== action.payload._id);
    default:
      return state;
  }
};

const audioReducer = (state = { isPlaying: false }, action) => {
  switch (action.type) {
    case "SET_IS_PLAYING":
      return {
        ...state,
        isPlaying: action.payload,
      };
    // ...other reducer cases
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
  favouriteSongs: favouriteSongs,
  audio: audioReducer,
});

// Store

export default rootReducer;
