import React from 'react';

const StarRating = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
    const emptyStars = totalStars - filledStars;

    return (
        <div className="star-rating">
            {[...Array(filledStars)].map((_, index) => (
                <span key={index} className="star">&#9733;</span>
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <span key={index} className="star">&#9734;</span>
            ))}
        </div>
    );
}

export default StarRating;

// Add this CSS to your stylesheet or in a <style> tag
{ <style jsx>{`
    .star-rating {
        display: flex;
        align-items: center;
    }
    .star {
        font-size: 24px;
        color: gold;
        margin-right: 5px;
    }
`}</style> }