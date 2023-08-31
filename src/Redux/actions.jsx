// actions.js

// Action types
export const SET_ARTIST_DATA = "SET_ARTIST_DATA";
export const SET_ALBUM_DATA = "SET_ALBUM_DATA";
export const SET_MUSIC_DATA = "SET_MUSIC_DATA";

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
