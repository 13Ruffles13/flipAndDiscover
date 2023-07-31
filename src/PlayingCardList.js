import React from "react";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/**
 * Component that renders a list of playing cards.
 * It uses the useAxios hook to fetch and manage the cards data.
 */
function PlayingCardList() {
  const [cards, addCard] = useAxios("https://deckofcardsapi.com/api/deck/");

  /**
   * Function to handle adding a new card.
   * It calls the addCard function from useAxios to fetch a new card.
   */
  const handleAddCard = async () => {
    await addCard("new/draw/");
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleAddCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

export default PlayingCardList;
