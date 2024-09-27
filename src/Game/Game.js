// import "../styles/Game.css";
// import "../styles/Game-grid.css";
// import { VolumeSlider } from "./sections/VolumeSlider";
import { GiBrain } from "react-icons/gi";
import { useState, useRef } from "react";
import { createAvatar } from "@dicebear/core";
import { dylan } from "@dicebear/collection";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const Game = () => {
  //logic
  const [volume, setVolume] = useState(50);
  const [rounds] = useState(4);
  const [round] = useState(1);
  const [questionTime] = useState(30);
  const [count] = useState(questionTime);
  const [randomQuestion] = useState(
    "The streaming service Netflix has/had a subscription with advertising in 2024. True or false?"
  );
  const [lastAnswer] = useState("No");
  const [correctAnswer] = useState("Yes");
  const [playerAnswerInput, setPlayerAnswerInput] = useState("");
  const inputRef = useRef(null);

  const renderBrains = (numLives) => {
    return Array.from({ length: numLives }, (_, i) => (
      <GiBrain key={i} style={{ color: "gray", marginRight: "2px" }} />
    ));
  };
  const sendAnswer = async () => {navigate('/Voting')};
  const navigate=useNavigate()
  // Example
  // if its my turn
  const [playerCounter] = useState(0);
  const [playerName] = useState("A");
  const [showLastAnswer] = useState(false);
  const [myTurn] = useState(true);

  // if its not my turn
  /*
  const [playerCounter] = useState(2);
  const [playerName] = useState("AAAAAAAAAAAA");
  const [showLastAnswer,] = useState(false);
  const [myTurn] = useState(false);
  */

  // if show my anwser
  /*
  const [playerCounter] = useState(0);
  const [playerName] = useState("A");
  const [showLastAnswer,] = useState(true);
  const [myTurn] = useState(false);
  */

  // Example array of players
  let uid = "1";
  const players = [
    {
      playerID: "1",
      playerName: "A",
      isCreator: true,
      lives: 3,
    },
    {
      playerID: "2",
      playerName: "Bobby",
      isCreator: false,
      lives: 0,
    },
    {
      playerID: "3",
      playerName: "AAAAAAAAAAAA",
      isCreator: false,
      lives: 5,
    },
    //3-12 players
  ];

  // create avatars
  // https://www.dicebear.com
  const avatars = useMemo(() => {
    return players
      ? players.map((player) =>
          createAvatar(dylan, {
            size: 50,
            seed: player.playerName,
            backgroundColor: [],
          }).toDataUri()
        )
      : [];
  }, [players]);

  return (
    <div className="game-container">
      <div className="Game-heads-up-display">
        {/* <VolumeSlider
          className="Game-heads-up-display-VolumeSlider"
          Lobby-settings-box={volume}
          volume={volume}
          setVolume={setVolume}
        /> */}
        <h1 className="Game-heads-up-display-time">{count}</h1>
        <h1 className="Game-heads-up-display-rounds">
          {round}/{rounds}
        </h1>
      </div>
      <div className="Game-player-list">
        {players &&
          players.map((player, index) => (
            <div
              className={`Game-player-list-player ${
                player.lives <= 0 ? "grayed-out" : ""
              }`}
              key={index}
            >
              <img src={avatars[index]} alt="Avatar" />
              <h3 style={{ position: "relative" }}>
                {player.playerID === uid ? (
                  <span style={{ backgroundColor: "yellow" }}>
                    {player.playerName}
                    {player.isCreator && (
                      <span
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "-5px",
                          fontSize: "17px",
                        }}
                      >
                        👑
                      </span>
                    )}
                  </span>
                ) : (
                  <span
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    {player.playerName}
                    {player.isCreator && (
                      <span
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "-5px",
                          fontSize: "17px",
                        }}
                      >
                        👑
                      </span>
                    )}
                  </span>
                )}
                {index === playerCounter && <span>←</span>}
                <br />
                {renderBrains(player.lives)}
              </h3>
            </div>
          ))}
      </div>

      <div className="Game-question-area">
        <h1 className="Game-question-area-player-name">{playerName}</h1>
        <h1>{randomQuestion}</h1>

        {myTurn && (
          <div className="Game-question-area-input-div">
            <input
              type="text"
              id="meinInputFeld"
              value={playerAnswerInput}
              placeholder="schreib!"
              ref={inputRef}
              onChange={(e) => {
                setPlayerAnswerInput(e.target.value);
              }}
            ></input>
            <button onClick={sendAnswer} disabled={!myTurn}>
              send answer
            </button>
          </div>
        )}
        {showLastAnswer && (
          <>
            <h1 className="Game-question-area-player-answer">{lastAnswer}</h1>
            <p className="Game-question-area-correct-answer">{correctAnswer}</p>
          </>
        )}
      </div>
    </div>
  );
};
