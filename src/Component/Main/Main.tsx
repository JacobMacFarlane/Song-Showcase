import React, {useState, useEffect, FC} from "react";
import { SongDeets } from "../App/App";
import { Song } from "../Card/Song";
import '../../assets/fonts/fonts.css'
import "./Main.css";
interface MainProps {
   data: SongDeets[];
   chooseSong: (song: SongDeets) => void;
   removeFavorite: (song: SongDeets) => void;
}


export const Main: FC<MainProps> = (props: MainProps) => {
const songs: JSX.Element[] = props.data.map(
   (song: SongDeets, index: number) => {
   return (
       <Song
           key={index}
           song={song}
           chooseSong={props.chooseSong}
           removeFavorite={props.removeFavorite}
           />
   )
})
   return (
       <main className="main">
           {songs}
       </main>
   )
}
