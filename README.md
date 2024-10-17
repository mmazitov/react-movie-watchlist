<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Movie Watchlist App" />

  &#xa0;
</div>

<h1 align="center">Movie Watchlist App</h1>

## 🎯 About 
This Movie Watchlist App allows users to search for movies, add them to a watchlist, mark them as watched, and move them between the watchlist and watched lists. The app uses The Movie Database (TMDb) API to fetch movie details.


## ✨ Features
- **Search Movies:** Search for movies using TMDb API.
- **Watchlist:** Add movies to your watchlist.
- **Watched Movies:** Mark movies as watched.
- **Move Between Lists:** Move movies between the watchlist and watched list.
- **Persistent Storage:** Movie lists are stored in localStorage to persist between sessions.

## 🚀 Technologies
The following technologies are used in this project:

- **[React](https://pt-br.reactjs.org/):** A JavaScript library for building user interfaces.
- **[TMDb API](https://developer.themoviedb.org/reference/intro/getting-started):** To search for movie details.
- **[Context API & Reducer](https://react.dev/learn/scaling-up-with-reducer-and-context):** For adding icons (search and close) to the component.
- **[React Router](https://reactrouter.com/en/main):** For navigation between pages.
- **[Font Awesome](https://fontawesome.com/):** For icons used in the movie controls.

## ✅ Requirements
Before starting 🏁, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## 🏁 Starting
```
# Clone this project
$ git clone https://github.com/mmazitov/react-movie-watchlist.git

# Access
$ cd react-movie-watchlist

# Install dependencies
$ $ yarn or $ npm install

# Run the project
$ $ yarn start or $ npm start

# The server will initialize in the <http://localhost:3000>
```
## 🏗️ Environment Variables
```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```
You can get an API key by creating an account on [TMDb](https://developer.themoviedb.org/reference/intro/getting-started) and generating a new key in the API section.

##  Project Structure

```
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Add.js              # Component for searching and adding movies
│   │   ├── Header.js           # Header navigation component
│   │   ├── MovieCard.js        # Displays individual movie details
│   │   ├── MovieControls.js    # Controls for managing movies in the watchlist or watched
│   │   ├── ResultCard.js       # Displays search results
│   │   ├── Watched.js          # Page for displaying watched movies
│   │   └── WatchList.js        # Page for displaying movies in the watchlist
│   ├── context
│   │   ├── AppReducer.js       # Reducer for handling movie actions
│   │   ├── GlobalState.js      # Context API setup and provider
│   └── App.js                  # Main app component
├── .env                        # Environment variables file
├── .gitignore                  # Ignored files for Git
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation

```

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any bugs or have feature requests.
