import { useState } from 'react';

const useLikeCard = () => {
  const [likedCards, setLikedCards] = useState([]);
  
  const addLikedCard = (cardId) => {
    const exisingLikedCards = JSON.parse(localStorage.getItem('likedCards') || '[]' );
    const updatedLikedCards = [...exisingLikedCards, cardId];
    setLikedCards(updatedLikedCards);
    localStorage.setItem('likedCards', JSON.stringify(updatedLikedCards));
  };

  const removeLikedCard = (cardId) => {
    const exisingLikedCards = JSON.parse(localStorage.getItem('likedCards') || '[]' );
    const updatedLikedCards = exisingLikedCards.filter(id => id !== cardId);
    setLikedCards(updatedLikedCards);
    localStorage.setItem('likedCards', JSON.stringify(updatedLikedCards));
  };


  const isCardLiked = (cardId) => {
    const exisingLikedCards = JSON.parse(localStorage.getItem('likedCards') || '[]' );
    return exisingLikedCards.includes(cardId);
  };

  return {
    likedCards,
    addLikedCard,
    removeLikedCard,
    isCardLiked,
  };
};

export default useLikeCard;

