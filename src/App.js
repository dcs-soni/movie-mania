import { useState } from "react";
import "./styles.css";

const movieList = {
  action: [
    {
      Name: "The Tomorrow War",
      Description:
        "A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.",
      Ratings: "6.6⭐",
      Poster: "https://wallpapercave.com/wp/wp9456609.jpg"
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

  comedy: [
    {
      Name: "The Lost Boys",
      Description:
        "After moving to a new town, two brothers discover that the area is a haven for vampires.",
      Ratings: "7.3⭐",
      Poster: "https://wallpapercave.com/wp/wp3996664.jpg"
    },

    {
      Name: " Space Jam: A New Legacy",
      Description:
        "A rogue artificial intelligence kidnaps the son of famed basketball player LeBron James, who then has to work with Bugs Bunny to win a basketball game.",
      Ratings: "4.4⭐",
      Poster: "https://wallpapercave.com/wp/wp8487455.png"
    },

    {
      Name: "Luca",
      Description:
        "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.",
      Ratings: "7.5⭐",
      Poster: "https://wallpapercave.com/wp/wp9328499.jpg"
    }
  ],

  thriller: [
    {
      Name: "Parasite",
      Description:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      Ratings: "8.6⭐",
      Poster: "https://wallpapercave.com/wp/wp5510252.jpg"
    },

    {
      Name: " Knives Out ",
      Description:
        "A detective investigates the death of a patriarch of an eccentric, combative family.",
      Ratings: "7.9⭐",
      Poster: "https://wallpapercave.com/wp/wp4969639.jpg"
    },

    {
      Name: " Hot Fuzz   ",
      Description:
        "A skilled London police officer is transferred to a small town with a dark secret.",
      Ratings: "7.8⭐",
      Poster: "https://wallpapercave.com/wp/wp5268883.jpg"
    }
  ]
};

const movieGenres = Object.keys(movieList);

export default function App() {
  const [genre, setGenre] = useState(movieList.action);

  function clickHandler(genre) {
    var typeGenre = movieList[genre];
    setGenre(typeGenre);
  }

  function getMoviesList(movie) {
    var name = movie.Name;
    var imageURL = movie.Poster;
    var description = movie.Description;
    var rating = movie.Ratings;

    var movies = (
      <li>
        <img src={imageURL} alt="movie-poster" />
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{name}</h3>
          {/* <small style={{ fontSize: "0.7rem" }}>{rating}</small> */}
          <p className="description">{description}</p>
          <p className="rating">{rating}</p>
        </div>
      </li>
    );

    return movies;
  }

  return (
    <div className="App">
      <h1>Movie Mania</h1>
      <div className="txt-content">
        <p>Find the best movies of every genres one must watch.</p>
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
      <ul>
        {genre.map((movie) => {
          return getMoviesList(movie);
        })}
      </ul>
    </div>
  );
}
