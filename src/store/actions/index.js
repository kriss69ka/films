export const LOADFILMS = "FILMS";

export const loadFilms = () => dispatch => {
  fetch("https://ghibliapi.herokuapp.com/films?limit=3")
    .then(res => res.json())
    .then(res => dispatch({ type: LOADFILMS, payload: res }));
};
