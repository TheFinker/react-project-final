import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";

import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";
import { useUser } from "../../users/providers/UserProvider";

export default function CardsPage() {
  const {
    cards,
    error,
    isLoading,
    getAllCards,
    handleCardLike,
    handleCardDelete,
  } = useCards();
  const { user } = useUser();

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  return (
    <div>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all bussines cards from all categories"
      />
      <CardsFeedback
        cards={cards}
        handleDelete={handleCardDelete}
        handleLike={handleCardLike}
        isLoading={isLoading}
        error={error}
      />

{user && user.isBusiness||user && user.isAdmin &&<AddNewCardButton />}
    </div>
  );
}
