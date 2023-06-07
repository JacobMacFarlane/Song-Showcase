import React, {useState, useEffect, FC} from "react";
import { SongDeets } from "../App/App";
import { StarRating } from "../Stars/StarRating";
interface SongProps {
    song: SongDeets
    chooseSong: (song: SongDeets) => void;
    removeFavorite: (song: SongDeets) => void;
}

export const Song: React.FC<SongProps> = (props: SongProps) => {
    const {song, chooseSong, removeFavorite} = props


const handleRatingChange = (rating: number) => {
    song.favorited = rating > 0
    if (rating > 0) {
        chooseSong(song)
    } else {
        removeFavorite(song)
    }
}
//    const handleFavorite = () => {
//     if (!song.favorited) {
//         song.favorited = true;
//         chooseSong(song);
//         } else {
//         song.favorited= false
//         removeFavorite(song);
//    }
//    }
    return (
        <div>
            <img src={song.albumCover} alt={song.albumTitle} />
            <h3>{song.title}</h3>
            <StarRating
                rating={song.favorited ? 1 : 0}
                onRatingChange={handleRatingChange}
                />
            {/* <button 
                name={song.title}
                onClick={() => handleFavorite()}
                >
                    {song.favorited ? 'Unfavorite' : 'Favorite'}
            </button> */}
        </div>
    )
}