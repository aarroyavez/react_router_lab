// components/TicketPaymentPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { sendPaymentLink } from "../services/paymentsService";

export function TicketPaymentPage() {
  const { eventId, priceId } = useParams();

  const handleSendPaymentLink = () => {
    sendPaymentLink("example@example.com", eventId, priceId);
  };

  return (
    <div>
      <h1>Ticket Payment Page</h1>
      <button onClick={handleSendPaymentLink}>Send me a payment link</button>
    </div>
  );
}
