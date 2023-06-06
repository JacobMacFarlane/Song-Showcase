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
}

const App: React.FC = () => {
  const [songs, setSongs] = useState<SongDeets[]>([]);
  const [favorites, setFavorites] = useState<SongDeets[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      
      const pierreData: SongDeets[] | undefined = await fetchPierreBourneData()
      const radioHeadData: SongDeets[] | undefined  = await fetchRadioHeadData()
      const frankData: SongDeets[] | undefined  = await fetchFrankOceanData()
      const asapData: SongDeets[] | null = await fetchAsapRockyData()
      const lanaData: SongDeets[] | undefined = await fetchLanaDelReyData()
      const deftonesData: SongDeets[] | undefined = await fetchDeftonesData()
      const destroyData: SongDeets[] | undefined = await fetchDestroyLonelyData()
      const cartiData: SongDeets[] | undefined = await fetchPlayboiCarti()
      const cureData: SongDeets[] | undefined = await fetchTheCureData()
      const kendrickData: SongDeets[] | undefined = await fetchKendrickLamarData()
      // const combinedData = [...asapData,...lanaData, ...frankData,...radioHeadData, ...pierreData, ...deftonesData,...destroyData,...cartiData, ...cureData, ...kendrickData]
      if (pierreData) {
        setSongs(pierreData);
      } else {
        setSongs([]);
      }
      if (radioHeadData) {
        setSongs(prevSongs => [...prevSongs, ...radioHeadData]);
      }
      if (frankData) {
        setSongs(prevSongs => [...prevSongs, ...frankData]);
      }
      if (lanaData) {
        setSongs(prevSongs => [...prevSongs, ...lanaData]);
      }
      if (deftonesData) {
        setSongs(prevSongs => [...prevSongs, ...deftonesData]);
      }
      if (destroyData) {
        setSongs(prevSongs => [...prevSongs, ...destroyData]);
      }
      if (cartiData) {
        setSongs(prevSongs => [...prevSongs, ...cartiData]);
      }
      if (cureData) {
        setSongs(prevSongs => [...prevSongs, ...cureData]);
      }
      if (cureData) {
        setSongs(prevSongs => [...prevSongs, ...cureData]);
      }
      if (asapData) {
        setSongs(prevSongs => [...prevSongs, ...asapData]);
      }
      if (kendrickData) {
        setSongs(prevSongs => [...prevSongs,...kendrickData]);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
     <h1> Song Rate</h1>
     <Header/>
       {loading && <h2>Loading...</h2>}
       {error && <Error />}
     <Switch>
       <Route exact path="/" render={() => (
         <Main data={songs}/>
         )}
       />
      <Route exact path="/favorites" render={() => (
        <Main data={favorites}/>
        )} 
      />
      <Route path="*" render={() => <Error />}/>
     </Switch>
    </div>
  );
}

export default App;
