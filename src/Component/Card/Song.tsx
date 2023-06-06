import React, {useState, useEffect, FC} from "react";
import { SongDeets } from "../App/App";

interface SongProps {
    song: SongDeets
    chooseSong: (song: SongDeets) => void;
    removeFavorite: (song: SongDeets) => void;
}
export const Song: React.FC<SongProps> = (props: SongProps) => {
    const {song, chooseSong, removeFavorite} = props
    const [favorite, setFavorite] = useState(false);

   const handleFavorite = () => {
    if (!favorite) {
        setFavorite(true);
        chooseSong(song);
        } else {
        setFavorite(false);
        removeFavorite(song);
   }
   }
    return (
        <div>
            <img src={song.albumCover} alt={song.albumTitle} />
            <h3>{song.title}</h3>
            <button 
            name={song.title}
            onClick={handleFavorite}>
                {favorite ? "Unfavorite" : "Favorite"}
            </button>
        </div>
    )
}