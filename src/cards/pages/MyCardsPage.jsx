import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";

import AddNewCardButton from "../components/AddNewCardButton";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

export default function MyCardsPage() {
  const {
    myCards,
    error,
    isLoading,
    getAllMyCards,
    handleCardLike,
    handleCardDelete,
  } = useCards();

  useEffect(() => {
    getAllMyCards();
  }, [getAllMyCards]);

  return (
    <div>
      <PageHeader
        title="My Cards"
        subtitle="On this page you can find all bussines cards you created"
      />
      <CardsFeedback
        cards={myCards}
        handleDelete={handleCardDelete}
        handleLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />
      <AddNewCardButton />
    </div>
  );
}
