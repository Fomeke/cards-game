import { useState, useEffect } from "react";
import { Card } from "./components/Card";

interface CardProps {
  value: string;
  pint: string;
}

useEffect(() => {
  const pint = ["♠️", "♥️", "♦️", "♣️"];
  const value = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let newDeck: CardProps[] = [];
}, []);

function App() {
  const [hand, setHand] = useState<CardProps[]>([]);
  const [deck, setDeck] = useState<CardProps[]>([]);

  return (
    <>
      <Card value="♠️" pint="A" />
    </>
  );
}
