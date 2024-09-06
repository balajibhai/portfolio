import React, { useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import "../css/Draggable.css";

interface Card {
  id: number;
  position: { x: number; y: number };
  text: string;
}

interface DraggableCardProps {
  currentMenu: string;
}

const DraggableCard = ({ currentMenu }: DraggableCardProps) => {
  const [cards, setCards] = useState<Card[]>([
    { id: 1, position: { x: 0, y: 0 }, text: "Work" },
    { id: 2, position: { x: 350, y: 0 }, text: "About" },
    { id: 3, position: { x: 700, y: 0 }, text: "Work" },
    { id: 4, position: { x: 1050, y: 0 }, text: "About" },
    { id: 5, position: { x: 0, y: 250 }, text: "About" },
    { id: 6, position: { x: 350, y: 250 }, text: "Work" },
    { id: 7, position: { x: 700, y: 250 }, text: "About" },
    { id: 8, position: { x: 1050, y: 250 }, text: "Work" },
    { id: 9, position: { x: 0, y: 500 }, text: "Work" },
    { id: 10, position: { x: 350, y: 500 }, text: "About" },
    { id: 11, position: { x: 700, y: 500 }, text: "Work" },
    { id: 12, position: { x: 1050, y: 500 }, text: "About" },
  ]);

  const [positionBeforeDrag, setPositionBeforeDrag] = useState({
    position: { x: 0, y: 0 },
  });

  const handleDrag = (e: MouseEvent, data: DraggableData, id: number) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const draggedCardIndex = updatedCards.findIndex((card) => card.id === id);
      const draggedCard = updatedCards[draggedCardIndex];

      if (!draggedCard) return updatedCards;

      // Update the position of the dragged card
      const originalPosition = positionBeforeDrag.position;
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

  const handleStart = (e: DraggableEvent, data: DraggableData, id: number) => {
    setPositionBeforeDrag({ position: { x: data.x, y: data.y } });
  };

  return (
    <div style={{ padding: "50px", position: "relative", height: "500px" }}>
      {cards.reduce((acc, card) => {
        if (card.text === currentMenu || currentMenu === "All") {
          acc.push(
            <CardComponent
              key={card.id}
              card={card}
              handleStart={handleStart}
              handleDrag={handleDrag}
              currentMenu={currentMenu}
              adjustedIndex={acc.length}
            />
          );
        }
        return acc;
      }, [] as JSX.Element[])}
    </div>
  );
};

// Separate functional component for the card
interface CardComponentProps {
  card: Card;
  handleStart: (e: DraggableEvent, data: DraggableData, id: number) => void;
  handleDrag: (e: MouseEvent, data: DraggableData, id: number) => void;
  currentMenu: string;
  adjustedIndex: number;
}

const CardComponent = ({
  card,
  handleStart,
  handleDrag,
  currentMenu,
  adjustedIndex,
}: CardComponentProps) => {
  // Calculate new position by incrementing x by 250 times the adjusted index
  const newPosition = {
    x: 250 * adjustedIndex,
    y: 0,
  };
  const position =
    currentMenu === "About" || currentMenu === "Work"
      ? newPosition
      : card.position;

  return (
    <Draggable
      position={position}
      onStart={(e, data) => handleStart(e, data, card.id)}
      onDrag={(e, data) => handleDrag(e as MouseEvent, data, card.id)}
    >
      <div className="card" style={cardStyle}>
        <h3>Card {card.id}</h3>
        <p>{card.text}</p>
      </div>
    </Draggable>
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
  transition: "transform 0.3s", // For CSS transition animation
};

export default DraggableCard;
