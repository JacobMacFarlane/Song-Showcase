import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import {fetchArtistData} from "../../apiCalls";
import "./App.css";
import { Header } from "../Header/Header";
import { Error } from "../Error/Error";
import { Main } from "../Main/Main";

export type SongDeets = {
  id: number;
  title: string;
  albumTitle: string;
  albumCover: string;
  artistId: number;
  artistName: string;
  rank: number;
  favorited: boolean;
};

const App: React.FC = () => {
  const [songs, setSongs] = useState<SongDeets[]>([]);
  const [favorites, setFavorites] = useState<SongDeets[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const chooseSong = (song: SongDeets) => {
    const newFavState = [...favorites, song];
    setFavorites(newFavState);
  };
  const removeFavorite = (songToRemove: SongDeets) => {
    const newFavState = favorites.filter((fav) => fav.id !== songToRemove.id);
    setFavorites(newFavState);
  };

  const fetchData = async () => {
    const artists = [
      "Pierre Bourne",
      "Kendrick Lamar",
      "Lana Del Rey",
      "Deftones",
      "Frank Ocean",
      "Playboi Carti",
      "Radio Head",
      "The Cure",
      "Asap Rocky",
      "Destroy Lonely",
      "Pastel Ghost",
      "No Doubt",
      "The Marias",
      "Lil Uzi Vert",
      "Logic",
      "The Smiths",
      "Smashing Pumpkins"
    ]
    const fetchFunctions = artists.map((artist) => fetchArtistData(artist));
    try {
      const fetchedData = await Promise.all(fetchFunctions);
      const combinedData = fetchedData.flat() as SongDeets[];

      if (!fetchedData) {
        setError("Error fetching data");
      }
      const randomizedData = combinedData.sort(() => Math.random() - 0.5);
      setSongs(randomizedData);
      setLoading(false);
    } catch (err: any) {
      setError(
        "There was an error fetching data, we are working to get it working, PLease try again later"
      );
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="App">
      <Header />
      {loading && <h2>Loading...</h2>}
      {error && <Error message={error} />}
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main
              data={songs}
              chooseSong={chooseSong}
              removeFavorite={removeFavorite}
            />
          )}
        />
        <Route
          path="/favorites"
          render={() => (
            <Main
              data={favorites}
              chooseSong={chooseSong}
              removeFavorite={removeFavorite}
            />
          )}
        />
        <Route path="*" render={() => <Error />} />
      </Switch>
    </section>
  );
};

export default App;
