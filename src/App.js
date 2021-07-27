import { useState } from "react";
import "./styles.css";

const movieList = {
  action: [
    {
      Name: "Black Widow",
      Description:
        "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
      Ratings: "6.9⭐",
      Poster: "https://wallpapercave.com/wp/wp8124969.jpg"
    },

    {
      Name: "Gunpowder Milkshake",
      Description:
        "Three generations of women fight back against those who could take everything from them.",
      Ratings: "6.0⭐",
      Poster: "https://wallpapercave.com/wp/wp9476495.jpg"
    },

    {
      Name: "The Tomorrow War",
      Description:
        "A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.",
      Ratings: "6.6⭐",
      Poster: "https://wallpapercave.com/wp/wp9456616.jpg"
    }
  ],

  horror: [
    {
      Name: " Fear Street: Part One - 1994",
      Description:
        "A circle of teenage friends accidentally encounter the ancient evil responsible for a series of brutal murders that have plagued their town for over 300 years. Welcome to Shadyside.",
      Ratings: "6.6⭐",
      Poster: "https://wallpapercave.com/wp/wp9456616.jpg"
    },

    {
      Name: "A Quiet Place Part II",
      Description:
        "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path. ",
      Ratings: "7.4⭐",
      Poster: "https://wallpapercave.com/wp/wp5811934.jpg"
    },

    {
      Name: " The Lost Boys",
      Description:
        "After moving to a new town, two brothers discover that the area is a haven for vampires.",
      Ratings: "7.3⭐",
      Poster: "https://wallpapercave.com/wp/wp3996664.jpg"
    }
  ],

  comedy: [{}, {}, {}],

  thriller: [{}, {}, {}]
};

const movieGenres = Object.keys(movieList);

export default function App() {
  const [genre, setGenre] = useState(movieList.action);

  function clickHandler(genre) {
    var typeGenre = movieGenres[genre];
    setGenre(typeGenre);
  }

  function getMoviesList(movies) {
    var name = movies.Name;
  }

  return (
    <div className="App">
      <h1>Movie Mania</h1>
      <div className="txt-content">
        <p>
          {" "}
          Find the best movies of every genres you should watch once in a
          lifetime
        </p>
        <div class="heading">Movie genres</div>
      </div>

      <div>
        {movieGenres.map((genre) => {
          return (
            <button
              key={genre}
              className="button"
              onClick={() => clickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
    </div>
  );
}
