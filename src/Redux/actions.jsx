// actions.js

// Action types
export const SET_ARTIST_DATA = "SET_ARTIST_DATA";
export const SET_ALBUM_DATA = "SET_ALBUM_DATA";
export const SET_MUSIC_DATA = "SET_MUSIC_DATA";
export const SET_SONG_DATA = "SET_SONG_DATA";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const SET_IS_PLAYING = "SET_IS_PLAYING";

// Action creators
export const setArtistData = (data) => {
  return {
    type: SET_ARTIST_DATA,
    payload: data,
  };
};

export const setAlbumData = (data) => {
  return {
    type: SET_ALBUM_DATA,
    payload: data,
  };
};

export const setMusicData = (data) => {
  return {
    type: SET_MUSIC_DATA,
    payload: data,
  };
};

export const setOneSongData = (data) => {
  return {
    type: SET_SONG_DATA,
    payload: data,
  };
};

export const setSearchTerm = (data) => {
  return {
    type: SET_SEARCH_TERM,
    payload: data,
  };
};

export const addFavorite = (song) => ({
  type: ADD_FAV,
  payload: song,
});

export const removeFavorite = (song) => ({
  type: REMOVE_FAV,
  payload: song,
});

export const setIsPlaying = (isPlaying) => {
  return {
    type: SET_IS_PLAYING,
    payload: isPlaying,
  };
};
