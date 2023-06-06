import React, {useState, useEffect, FC} from "react";
import { SongDeets } from "../App/App";
import { Song } from "../Card/Song";

interface MainProps {
    data: SongDeets[];
}

export const Main: FC<MainProps> = (props: MainProps) => {
const songs = props.data.map((song, index) => {
    return <Song key={index} song={song} />
})
    return (
        <div>
            {songs}
        </div>
    )
}