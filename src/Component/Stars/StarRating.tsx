import React, {useState} from 'react';
import { FaStar } from "react-icons/fa"
import './StarRating.css'

interface StarRatingProps {
    rating?: number
    onRatingChange: (rating: number) => void
}

export const StarRating: React.FC<StarRatingProps> = (props: StarRatingProps) => {
    const [currentRating, setCurrentRating] = useState<number>(props.rating || 0)
    const [hover, setHover] = useState<number | null>(null)

    const handleRatingClick = (rating: number) => {
        setCurrentRating(rating)
        props.onRatingChange(rating)
    }
    return (
        <div>
            {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1

                return <label key={i}>
                    <input 
                    type="radio" 
                    name="rating" 
                    value={ratingValue} 
                    onClick={() => handleRatingClick(ratingValue)}
                    />
                    <FaStar 
                    className="star" 
                    color={ratingValue <= (hover || currentRating) ? "#ffc107" : "#e4e5e9"}
                    key={i} 
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}/>
                    </label>
                })}
        </div>
    )
}