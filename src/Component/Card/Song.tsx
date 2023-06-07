import React, {useState, useEffect, FC} from "react";
import { SongDeets } from "../App/App";


interface SongProps {
   song: SongDeets
   chooseSong: (song: SongDeets) => void;
   removeFavorite: (song: SongDeets) => void;


}


export const Song: React.FC<SongProps> = (props: SongProps) => {
   const {song, chooseSong, removeFavorite} = props


   const handleFavorite = () => {
       if (!song.favorited) {
           song.favorited = true;
           chooseSong(song);
           } else {
           song.favorited= false
           removeFavorite(song);
      }
      }
      const getSongTitleStyle = (): React.CSSProperties => {
        if (song.artistName === "Pi'erre Bourne") {
          return {
            fontFamily: "'BubbleFont', Arial, sans-serif",
          };
        } else if (song.artistName === "Lana Del Rey") {
          return {
            fontFamily: "CursiveFont",
            fontStyle: "italic",
          };
        } else if (song.artistName === "Radiohead") {
            return {
              fontFamily: "'bdplakatt', Arial, sans-serif",
            }
        } else {
          return {};
        }
      };





   return (
       <div className="song">
           <img src={song.albumCover} alt={song.albumTitle} />
           <h3 style={getSongTitleStyle()}>{song.title}</h3>
           <button
               name={song.title}
               onClick={() => handleFavorite()}
               >
                   {song.favorited ? 'Unfavorite' : 'Favorite'}
           </button>
       </div>
   )
}
