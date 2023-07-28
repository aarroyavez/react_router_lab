import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../services/eventsService";

export function EventDetailPage() {
  const { eventId } = useParams();

  useEffect(() => {
    async function fetchEvent() {
      const event = await getEventById(eventId);
      console.log("Event:", event);
    }

    fetchEvent();
  }, [eventId]);

  return <h1>Event Detail Page</h1>;
}
