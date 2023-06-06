import React, {useState, useEffect, FC} from "react";
import { SongDeets } from "../App/App";
import { Song } from "../Card/Song";

interface MainProps {
    data: SongDeets[];
}

export const Main: FC<MainProps> = (props: MainProps) => {
    
    return (
        <div>
            <p>
                Hello Main
            </p>
        </div>
    )
}