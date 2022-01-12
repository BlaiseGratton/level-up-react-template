import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { GameContext } from "../game/GameProvider";
import { EventContext } from '../event/EventProvider'


export const EventForm = () => {
  const history = useHistory();
  const { games, getGames } = useContext(GameContext);
  const { createEvent } = useContext(EventContext)

  const [currentEvent, setCurrentEvent] = useState({
    gameId: 0,
    description: '',
    date: null,
    time: '',
    title: ''
  });

  useEffect(() => {
    getGames()
  }, []);

  const changeEventState = (event) => {
    const newEventState = { ...currentEvent };
    newEventState[event.target.name] = event.target.value;
    setCurrentEvent(newEventState);
  };

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Schedule New Event</h2>

      <fieldset>
        <div className="form-group">
          <label htmlFor="gameId">Game: </label>
          <select
            name="gameId"
            className="form-control"
            value={currentEvent.gameId}
            onChange={changeEventState}
          >
            <option value="0">Select a game...</option>
            {games.map((game) => (
              <option value={game.id}>{game.title}</option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="Title">Title: </label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={currentEvent.title}
            onChange={changeEventState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={currentEvent.description}
            onChange={changeEventState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            className="form-control"
            value={currentEvent.date}
            onChange={changeEventState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="time">Time: </label>
          <input
            type="time"
            name="time"
            className="form-control"
            value={currentEvent.time}
            onChange={changeEventState}
          />
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          const event = {
            title: currentEvent.title,
            gameId: currentEvent.gameId,
            description: currentEvent.description,
            date: new Date(currentEvent.date),
            time: currentEvent.time
          };

          debugger
          createEvent(event).then(() => history.push("/events"));

        }}
        className="btn btn-primary"
      >
        Create Event
      </button>
    </form>
  );
};