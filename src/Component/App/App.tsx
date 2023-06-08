import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom'
import { fetchAsapRockyData, fetchDeftonesData, fetchDestroyLonelyData, fetchFrankOceanData, fetchKendrickLamarData, fetchLanaDelReyData, fetchPierreBourneData, fetchPlayboiCarti, fetchRadioHeadData, fetchTheCureData } from '../../apiCalls';
import './App.css';
import {Header} from '../Header/Header';
import {Error} from '../Error/Error';
import {Main} from '../Main/Main';


export type SongDeets = {
 id: number
 title: string
 albumTitle: string
 albumCover: string
 artistId: number
 artistName: string
 rank: number
 favorited: boolean
}


const App: React.FC = () => {
 const [songs, setSongs] = useState<SongDeets[]>([]);
 const [favorites, setFavorites] = useState<SongDeets[]>([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<Error | null>(null);


 const chooseSong = (song: SongDeets) => {
   const newFavState = [...favorites, song];
   setFavorites(newFavState);
 }
 const removeFavorite = (songToRemove: SongDeets) => {
 const newFavState = favorites.filter((fav) => fav.id !== songToRemove.id);
 setFavorites(newFavState);
}


 const fetchData = async () => {
   const fetchFunctions = [
     fetchPierreBourneData(),
     fetchRadioHeadData(),
     fetchFrankOceanData(),
     fetchAsapRockyData(),
     fetchLanaDelReyData(),
     fetchDeftonesData(),
     fetchDestroyLonelyData(),
     fetchPlayboiCarti(),
     fetchTheCureData(),
     fetchKendrickLamarData()
   ];
    try {
     const fetchedData = await Promise.all(fetchFunctions);
     const combinedData = fetchedData.flat() as SongDeets[]
     console.log(combinedData, 'right here');
     setSongs(combinedData);
     setLoading(false);
   } catch (error) {
     setError(error as Error | null);
     setLoading(false);
   }
 };
  useEffect(() => {
   fetchData();
 }, []);




 return (
   <section className="App">
    <Header/>
     {loading && <h2>Loading...</h2>}
     {error && <Error />}
    <Switch>
      <Route
       exact path="/"
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
     <Route path="*" render={() => <Error />}/>
    </Switch>
   </section>
 );
}


export default App;
