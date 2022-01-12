import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "./GameProvider.js";
import { useHistory } from "react-router-dom";

export const GameForm = () => {
  const history = useHistory();
  const { createGame, getGameTypes, gameTypes } = useContext(GameContext);

  const [currentGame, setCurrentGame] = useState({
    skillLevel: 1,
    numberOfPlayers: 0,
    title: "",
    maker: "",
    gameTypeId: 0,
  });

  useEffect(() => {
    getGameTypes();
  }, []);

  const changeGameState = (event) => {
    const newGameState = { ...currentGame };
    newGameState[event.target.name] = event.target.value;
    setCurrentGame(newGameState);
  };

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Register New Game</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            required
            autoFocus
            className="form-control"
            value={currentGame.title}
            onChange={changeGameState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="maker">Maker: </label>
          <input
            type="text"
            name="maker"
            required
            className="form-control"
            value={currentGame.maker}
            onChange={changeGameState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="numberOfPlayers">Number of players: </label>
          <input
            type="number"
            name="numberOfPlayers"
            required
            className="form-control"
            value={currentGame.numberOfPlayers}
            onChange={changeGameState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="skillLevel">Skill level: </label>
          <input
            type="text"
            name="skillLevel"
            required
            className="form-control"
            value={currentGame.skillLevel}
            onChange={changeGameState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="gameTypeId">Game type: </label>
          <select
            name="gameTypeId"
            required
            className="form-control"
            value={currentGame.gameTypeId}
            onChange={changeGameState}
          >
            {gameTypes.map(gt => <option value={gt.id}>{gt.label}</option>)}
          </select>
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          const game = {
            maker: currentGame.maker,
            title: currentGame.title,
            numberOfPlayers: parseInt(currentGame.numberOfPlayers),
            skillLevel: parseInt(currentGame.skillLevel),
            gameTypeId: parseInt(currentGame.gameTypeId),
          };

          createGame(game).then(() => history.push("/games"));
        }}
        className="btn btn-primary"
      >
        Create
      </button>
    </form>
  );
};