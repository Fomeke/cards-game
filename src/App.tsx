import { useState, useEffect } from "react";
import Card from "./components/Card";

interface CardProps {
  value: string;
  pint: string;
}

function App() {
  const [currentCard, setCurrentCard] = useState<CardProps | null>(null);
  const [deck, setDeck] = useState<CardProps[]>([]);
  const [colorFund, setColorFund] = useState("#ffffff");

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

    pint.forEach((pints) => {
      value.forEach((values) => {
        newDeck.push({ value: values, pint: pints });
      });
    });
    newDeck = newDeck.sort(() => Math.random() - 0.5);
    setDeck(newDeck);
  }, []);

  const drawCard = () => {
    if (deck.length === 0) {
      alert("There are no cards left.");
      return;
    }
    const newCard = deck[0];

    const remainingDeck = deck.slice(1);

    setCurrentCard(newCard);
    setDeck(remainingDeck);
  };

  const createDeck = () => {
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

    pint.forEach((pints) => {
      value.forEach((values) => {
        newDeck.push({ value: values, pint: pints });
      });
    });
    newDeck.sort();
    return newDeck;
  };

  useEffect(() => {
    const deckFresh = createDeck();
    setDeck(deckFresh);
  }, []);

  const resetGame = () => {
    setCurrentCard(null);
    setDeck(createDeck);
  };

  return (
    <div className="container" style={{ backgroundColor: colorFund }}>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h2>Card in deck: {deck.length}</h2>
        <div style={{ display: "flex", gap: "15px" }}>
          <button
            onClick={drawCard}
            style={{ display: "flex", padding: "20px", fontSize: "16px" }}
          >
            Draw a card
          </button>
          <button
            onClick={resetGame}
            style={{ display: "flex", padding: "20px", fontSize: "16px" }}
          >
            Restart Game
          </button>
          <input onChange={(e) => setColorFund(e.target.value)} type="color" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              border: "5px solid",
              width: "65px",
              height: "85px",
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1px",
              backgroundColor: "#ffffff",
            }}
          >
            {currentCard !== null ? (
              <Card value={currentCard.value} pint={currentCard.pint}></Card>
            ) : (
              <span>Deck</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
