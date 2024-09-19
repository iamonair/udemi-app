let numberOfFilms = +prompt("How many movies have you watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const answer1 = prompt("What is one of the last movies you wathed?", ""),
  answer2 = prompt("How much would you rate it at?", ""),
  answer3 = prompt("What is one of the last movies you wathed?", ""),
  answer4 = prompt("How much would you rate it at?", "");

personalMovieDB.movies[answer1] = answer2;
personalMovieDB.movies[answer3] = answer4;

console.log(personalMovieDB);
