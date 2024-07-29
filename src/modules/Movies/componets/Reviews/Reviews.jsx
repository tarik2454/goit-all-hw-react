import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from '../../services/movies-api-services';
import { StyledAuthor, StyledItem, StyledList } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviewsMovie() {
      try {
        const data = await getReviewsMovie(movieId);
        setReviews(data);
      } catch (error) {
        console.warn(error.message);
      }
    }

    fetchReviewsMovie();
  }, [movieId]);

  return (
    <>
      <StyledList>
        {reviews.length === 0 && <p>No reviews</p>}
        {reviews.map(item => (
          <StyledItem key={item.id}>
            <StyledAuthor>Author: {item.author}</StyledAuthor>
            <p>{item.content}</p>
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
};
