import React, { useState } from "react";
import { ReactComponent as StarIcon } from "./Star.svg";

const StarRating = () => {
    const [rating, setRating] = useState(null);
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input
                            style={{display: "none"}}
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <StarIcon
                            style={{
                                cursor: "pointer",
                                transition: "color 200ms" }}
                            className="star"
                            color={ratingValue <= rating ? "#FF6B08" : "#FFFFFF"} />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;