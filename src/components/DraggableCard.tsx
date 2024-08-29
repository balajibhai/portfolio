import React, { useState } from "react";
import Draggable, { DraggableData } from "react-draggable";
import "../css/Draggable.css"; // Assuming you use a CSS file for styles

interface Card {
  id: number;
  position: { x: number; y: number };
}

const DraggableCard: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    { id: 1, position: { x: 0, y: 0 } },
    { id: 2, position: { x: 250, y: 0 } },
    { id: 3, position: { x: 0, y: 150 } },
    { id: 4, position: { x: 250, y: 150 } },
  ]);

  const handleStop = (e: MouseEvent, data: DraggableData, id: number) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const draggedCardIndex = updatedCards.findIndex((card) => card.id === id);
      const draggedCard = updatedCards[draggedCardIndex];

      if (!draggedCard) return updatedCards;

      // Update the position of the dragged card
      const originalPosition = { ...draggedCard.position };
      draggedCard.position = { x: data.x, y: data.y };

      // Check for collision
      const collidedCardIndex = updatedCards.findIndex(
        (card) => card.id !== id && isColliding(draggedCard, card)
      );

      if (collidedCardIndex !== -1) {
        const collidedCard = updatedCards[collidedCardIndex];

        // Swap the positions
        collidedCard.position = originalPosition; // Move collided card to the original position of dragged card
        draggedCard.position = { x: data.x, y: data.y }; // Ensure dragged card stays at its new position
      }

      return updatedCards;
    });
  };

  const isColliding = (card1: Card, card2: Card) => {
    return (
      Math.abs(card1.position.x - card2.position.x) < 200 &&
      Math.abs(card1.position.y - card2.position.y) < 100
    );
  };

  return (
    <div style={{ padding: "50px", position: "relative", height: "500px" }}>
      {cards.map((card) => (
        <Draggable
          key={card.id}
          position={card.position}
          onStop={(e, data) => handleStop(e as MouseEvent, data, card.id)}
        >
          <div className="card" style={cardStyle}>
            <h3>Card {card.id}</h3>
            <p>Drag me!</p>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  width: "200px",
  height: "100px",
  padding: "20px",
  margin: "10px",
  backgroundColor: "#f9f9f9",
  border: "1px solid #ddd",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  cursor: "grab",
  position: "absolute" as "absolute",
  transition: "transform 0.3s ", // For CSS transition animation
};

export default DraggableCard;
