import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider.js";
import { GamerContext } from "../gamer/GamerProvider.js";

export const EventList = (props) => {
  const { events, getEvents } = useContext(EventContext);
  const { currentGamer, getCurrentGamer } = useContext(GamerContext);

  useEffect(() => {
    getEvents();
    getCurrentGamer()
  }, []);

  return (
    <article className="events">
      <header className="events__header">
        <h1>Level Up Game Events</h1>
      </header>
      {events.map((event) => {
        return (
          <section key={event.id} className="registration">
            <div className="registration__game">{event.game.title}</div>
            <div>{event.description}</div>
            <div>
              <p>Current Gamer: {currentGamer.bio}</p>
              <p>'2022-01-20'</p>
              <p>{new Date(event.date).toString()}</p>
              <p>{new Date(event.date).toUTCString()}</p>
              <p>{new Date(event.date).getUTCDate()}-{new Date(event.date).getUTCMonth() + 1}-{new Date(event.date).getUTCDate()}</p>
              <p>{new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              @ {event.time}</p>
            </div>
          </section>
        );
      })}
    </article>
  );
};