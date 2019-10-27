import React from "react";
import { connect } from "react-redux";
import { loadFilms } from "../src/store/actions";
import "./App.css";

let loaded = false;

function App({ loadFilms, films }) {
  if (!loaded) {
    loadFilms();
  }
  loaded = true;

  return (
    <div className="App">
      <tr>
        {" "}
        <td>Title</td>
        <td>Description</td>
        <td>Director</td>
        <td>Producer</td>
      </tr>
      {films &&
        films.map(film => (
          <>
            <tr>
              <td>{film.title}</td>
              <td>{film.description}</td>
              <td>{film.director}</td>
              <td>{film.producer}</td>
            </tr>
          </>
        ))}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);

  return {
    films: state.films
  };
};

const mapDispatchToProps = {
  loadFilms
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
