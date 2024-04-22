/*
 *  Game navbar
 */

import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import game from "../img/game.png";

const GameNavbar = () => {
  return (
    <div className="gamenavbar">
      <div className="user">
        <span className="gamelogo">
            {" "}
            <span className="gamelogo"> <img src={game} alt="Game Icon"style={{ width: '20px', height: 'auto' }}></img>   Play Games:    </span>
            <Link to="/vocab-game">Vocab Match</Link>
        </span>
      </div> 
    </div>
  );
};

export default GameNavbar;